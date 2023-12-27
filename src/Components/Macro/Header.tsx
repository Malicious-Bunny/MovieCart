import '../../index.css'

import  { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AddCartContext } from '../ContextsNreducers/AddCartContext';


export default function Header() {
    const state = useContext(AddCartContext);

    

    function setThemeLight(){
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }
    function setThemeDark(){
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
    }

    const [lightDark, setLightDark] = useState<string>('light');
    const [menu, setMenu] = useState<boolean>(false);


    return <header style={
        {
          borderBottom : '2px dashed white'
        }
      } className="w-screen p-3 bg-fixed bg-white border-2 border-b-4 dark:border-white dark:p-4 dark:bg-black dark:border-none dark:text-white border-t-black font-inter sm:w-screen">
        { !menu &&  <div  className="flex flex-row content-center justify-between space-x-2">
        <div className="flex flex-row justify-center space-x-2">
                <Link className='self-center ' to='/'>
                <div className="self-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
                </div>
                </Link>
                {
                    state.length > 0? <span className='self-center text-sm justify-self-center font-inter'><strong>{`You have ${state.length} movies in cart`}</strong></span>
:<span className='self-center text-sm justify-self-center font-inter'><strong>Your cart is empty.</strong></span>

                }

        </div>

        <div className="flex-row justify-center hidden space-x-5 md:lg:flex utils">
            <div className='flex flex-row justify-center space-x-2 '>
        
            </div>

            <div className="flex flex-row justify-center space-x-5 light-dark">
                { lightDark == 'light' ? <div id='light' className='self-center dark:border-white  p-0.5 rounded-md border-black border hover:cursor-pointer ' onClick={()=>{
                    setLightDark('dark')
                    return setThemeDark()
                }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                </div>
                :
                <div id="dark" className='self-center p-0.5 dark:border-white rounded-md border-black border hover:cursor-pointer  ' onClick={()=>{
                    setLightDark('light')
                    return setThemeLight()
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </div>
}
        
          
               
            </div>
        </div>

        <div className="self-center dark:border-white menu md:lg:hidden" onClick={()=>{
            setMenu(true)
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-5 h-5 hover:cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

        </div>
        <div className='self-center hidden menu md:lg:block'>
       <Link className='self-center ' to='Cart'>
       <div className="self-center cart p-0.5 dark:border-white rounded-md border-black border hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

            </div>
       </Link>
        </div>
    </div>}
    

   { menu && <AnimatePresence>
       <motion.div className='z-30 flex flex-col gap-3 bg-white dark:border-white dark:bg-black w-spreen h-spreen MobileMenu'

        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8}}
        exit={{opacity:0.2}}
       >
            <div className="self-end close justify-self-end" onClick={()=>{
                setMenu(false)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
       </svg>
            </div>
            <div className="flex flex-col content-center justify-center gap-8 p-4 utils">
       
       
                <div className="flex flex-col content-center justify-center gap-4 hover:cursor-pointer dark-light ">
                    <div onClick={
                        ()=>{
                            setThemeDark()
                            setLightDark('dark')
                        }
                    
                    
                    } className="flex flex-row content-center justify-start gap-3 dark">
       
                    <div className=" justify-self-start  self-center dark p-0.5 rounded-md dark:border-white  border-black border space-x-6  hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                    </div>
                    <span>Dark Mode</span>
                    </div>
                    <div onClick={
                        ()=>{
                            setThemeLight()
                            setLightDark('light')
                        }
                    
                    } className="flex flex-row content-start justify-start gap-3 hover:cursor-pointer light ">
       
                        <div className="self-center light p-0.5 rounded-md dark:border-white border-black border space-x-6  hover:cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                        </div>
                        <span>Light Mode</span>
                     </div>
                </div>
       
              <Link to='mobile'>
              <div className="flex flex-row content-start justify-start gap-3 light ">
       
       <div className="self-center light p-0.5 dark:border-white rounded-md  border-black border space-x-6  hover:cursor-pointer ">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-4 h-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
       </div>
           <span>Check your cart</span>
        
           
       
</div>
              </Link>
            </div>
        </motion.div>
   </AnimatePresence>}
    </header>
}
import Footer from "./Components/Macro/Footer";
import Header from "./Components/Macro/Header";
import { Outlet } from "react-router-dom";
import AddCartContextProvider from "./Components/ContextsNreducers/AddCartContext";
import { useEffect } from "react";


export default function App(){
    
    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    },[])

    return <div className=" dark:text-white font-inter">
    
    <AddCartContextProvider >  

    <Header />
    <Outlet />
        <footer style={
          {
            borderTop : '2px dashed white'
          }
        } className='flex flex-row content-center justify-center w-screen pt-10 pb-8 pl-16 pr-16 overflow-hidden text-white dark:bg-black bg-blend-darken bg-slate-900'>
                    <Footer />
        </footer>

        </AddCartContextProvider >
    
    </div>

}
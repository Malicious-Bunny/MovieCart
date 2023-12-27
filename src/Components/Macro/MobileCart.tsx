import { BsPaypal } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { Link } from "react-router-dom"

import { useContext } from "react";
import { AddCartContext } from "../ContextsNreducers/AddCartContext";
import { AddCartDispatchContext } from "../ContextsNreducers/AddCartContext";
import MobileCartContentItem from "../Micro/MobileCartContent";

export default function MobileCart () {

   

    const cart = useContext(AddCartContext);
    const dispatch = useContext(AddCartDispatchContext);
    
    function clearCart(){
        dispatch({
            type : 'CLEAR',
            id : Math.floor(Math.random()*1000),
            name : 'item',
            price : 0,
            image : 'item',
        })
    }

    function calculateTotal() : number{
        let total : number = 0;
        cart.map((item)=>{
            total += parseInt(item.price.toString());
        })
        return total;
    }

    return <div id="Mob" className="flex flex-col w-screen h-screen gap-10 dark:bg-slate-950 xl:flex bg-slate-100 font-inter">
       
       <div className="flex flex-row content-center justify-between p-3 font-bold text-md">
           <Link to='/Cart'>
               <h1 className="text-sm underline">Back</h1>
           </Link>
              <h1>{`Total : $${calculateTotal()}`}</h1>
       </div>

       <div className="flex  flex-col p-3 h-[60%] border-2 border-gray-300 rounded-sm shadow-sm gap-4 w-screen overflow-scroll  ">
          


            {
                cart.length > 0 ? cart.map((item)=>{

                    return <MobileCartContentItem key={Math.random()} name={item.name} item={item.image}  price={(item.price).toString()} />
                }) : <div className="flex flex-col content-center w-full h-full gap-4 p-10">
                <div className="self-center ">Add movies to cart</div>          
          </div>
            }




          
        </div>

       <div className="flex flex-col content-center justify-center gap-4">
       <span className="self-center font-bold justify-self-center">Payment Methods</span>
           <div className="flex flex-row content-center justify-center paymentMethods">
           
                <div className="flex flex-row content-center justify-center paymenticons">
                    <div className="p-4 border border-gray-300 hover:border-green-400 w-max">
                        <BsPaypal className="w-8 h-8 text-blue-700 hover:cursor-pointer " />
                    </div>
                    <div className="p-4 border border-gray-300 hover:cursor-pointer hover:border-green-400 w-max">
                        <FcGoogle className="w-8 h-8 " />
                    </div>
                    <div className="p-4 border border-gray-300 hover:cursor-pointer hover:border-green-400 w-max">
                        <SiApple className="w-8 h-8 " />
                    </div>
                </div>
           </div>
       </div>

       {
        cart.length > 0 ? <div onClick={clearCart} className="flex flex-col content-center justify-center buttons">
        <button className="w-[50%] rounded-sm dark:text-white shadow-sm border-green-400 hover:bg-green-600 hover:text-white transition-all self-center h-12 text-black border">Checkout</button>

 </div> : <div className="flex flex-col content-center self-center justify-center text-lg font-bold dark:text-white md:lg:xl:text-xl buttons">
              <p>Cart is Empty </p>
       </div>
       }
    </div>
}
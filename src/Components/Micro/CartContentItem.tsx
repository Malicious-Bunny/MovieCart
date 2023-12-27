import { AddCartDispatchContext } from "../ContextsNreducers/AddCartContext"
import { useContext } from "react"

interface CartContentItemProps {
    name: string,
    item: string
    price : string
}
export default function CartContentItem({name,item, price}: CartContentItemProps) {

    const dispatch = useContext(AddCartDispatchContext);

    function removeFromCart(){
        dispatch({
            type : 'REMOVE',
            id : Math.floor(Math.random()*1000),
            name : item,
            price : parseInt(price),
            image : item,
        })
    }

    return <div  className=" cart dark:border-none dark:shadow-sm dark:shadow-white flex hover:cursor-pointer border shadow-sm self-center flex-row justify-between h-[30%] w-full">

        <div className="img space-x-4 w-[45%] h-full flex flex-row ">
            <img className="object-contain w-[45%] h-full" src={item} alt="item" />
            <div className="self-center price"> 
       
        </div>
        <div className="flex flex-col self-center w-full gap-2 ">
            
            <div className=" w-[50%] text-xl whitespace-nowrap text-ellipsis">{name}</div>
            <span className="text-3xl font-bold first-letter:text-sm">{`$${price}`}</span>
            
            </div>
        </div>
        

        <div onClick={
            removeFromCart
        } className="flex-col content-center justify-center hidden h-full p-10 text-red-500 del hover:cursor-pointer">
        <div className="self-center p-2 text-red-600 border border-red-500 rounded-md hover:bg-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
            </svg>
        </div>

        </div>
    </div>
}
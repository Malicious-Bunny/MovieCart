import { useEffect, useState } from "react";
import { allTitles } from "../../scripts/Titles";
import { AddCartDispatchContext } from "../ContextsNreducers/AddCartContext";
import { useContext } from "react";
import { AddCartContext } from "../ContextsNreducers/AddCartContext";
import { Link } from "react-router-dom";

export default function PickListItem(){

    const dispatch = useContext(AddCartDispatchContext);
    const cart = useContext(AddCartContext);

    const [ID, setID] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [rated, setRated] = useState<string>('');
    const [genres, setGenres] = useState<string[]>([]);

    function AddToCart(){
        dispatch({
            type : 'ADD_TO_CART',
            id : Math.floor(Math.random()*1000),
            name : title,
            price : price,
            image : image,
        })
    }

    function RemoveFromCart(){
        dispatch({
            type : 'REMOVE_FROM_CART',
            id : Math.floor(Math.random()*1000),
            name : title,
            price : price,
            image : image,
        })
    
    }

    function presentInCart() : boolean{
        
        let present : boolean = false;
        cart.map((item)=>{
            if(item.image == image){
                present = true;
            }
        })
        return present;
    }

    useEffect(()=>{
        const randomeTitle : string = allTitles[Math.floor(Math.random() * allTitles.length)].title.join('+');
        async function getPoster(){
            const poster : string = 'https://www.omdbapi.com/?apikey=3a1eedab&t='+randomeTitle+'';
            const data = await fetch(poster);

            return data;
        }

        getPoster().then((data)=>{
            return data.json();
        }).then((data)=>{
            if(data.Poster){
                setImage(data.Poster)
                setTitle(data.Title);
                const prce : number = Math.floor(Math.random()*100);
                setPrice(prce)
                setRated(data.Rated)
                setGenres(data.Genre.split(','))
                //setting tmdb id
                setID(data.imdbID)
            }
        })
    },[]);


    return <div className="w-full ">
        {
            image.length > 1 ? <div 
             className="relative flex flex-row content-center justify-center w-full gap-8 pt-3 pl-0 pr-6 border-2 dark:shadow-sm dark:shadow-white dark:border-none md:lg:xl:pb-6 focus:border-green-400 previewDiv hover:shadow-md h-max">

                <a href="">
                    <div id="click" className="absolute hidden text-blue-800 underline sm:text-sm hover:font-bold preview top-2 right-4">
                        <Link to={`/Preview/${ID}`}>Click to preview</Link>
                    </div>
                </a>
                
                <div className=" img   w-[40%]">
                    <img src={image} className="h-[23rem] object-center object-contain w-[100%]  " alt={title} />
                </div>

                <div className="flex flex-col w-[50%] h-full gap-3 md:lg:xl:gap-6 justify-center content-center self-center">
                    
                    <span className="text-4xl lg:xl:md:text-8xl first-letter:text-xl">{`$${price}`}</span>
                    <span className="p-0.5 text-sm md:lg:xl:text-xl text-gray-600 border border-gray-600 rounded-sm w-max text-ellipsis">{`Rated-${rated}`}</span>
                    {// geres}
}   
                    <div className="flex flex-row content-center justify-start gap-2 ">
                        {
                            genres.map((genre)=>{
                                return <span className="pr-2 text-sm text-gray-900 border-r rounded-sm md:lg:xl:text-xl hover:cursor-pointer hover:font-extrabold dark:text-white last:border-r-none w-max text-ellipsis">{genre}</span>
                            })
                        }
                    </div>
                    
                    {
                        !presentInCart() ? <button onClick={
                            ()=>{
                                AddToCart();
                            }
                        } className="p-4 text-green-700 border-2 border-green-700 rounded-sm dark:text-white hover:dark:text-black hover:bg-green-200 mt-14 ">Add to cart</button>
: <button onClick={
                        ()=>{
                            RemoveFromCart();
                        }
            
} className="p-4 text-red-700 border-2 border-red-700 rounded-sm dark:text-white hover:dark:text-black hover:bg-red-200 mt-14 ">Remove from Cart</button>

                    }
                    
                                    </div>




            </div>:
        
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
        <div className="flex items-center justify-center w-full h-[23rem] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 "></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] "></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] "></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
        </div>
        }
    </div>

}
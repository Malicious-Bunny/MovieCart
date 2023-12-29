import PreviewItem from "../Micro/PreviewItem";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddCartDispatchContext } from "../ContextsNreducers/AddCartContext";
import { AddCartContext } from "../ContextsNreducers/AddCartContext";


export default function PreviewPage(){
    const dispatch = useContext(AddCartDispatchContext);
    const cart = useContext(AddCartContext);

    const {name} = useParams<{name : string}>();

    function presentInCart() : boolean{
        
        let present : boolean = false;
        cart.map((item)=>{
            if(item.image == image){
                present = true;
            }
        })
        return present;
    }

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

    const [plot, setPlot] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [rated, setRated] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [genres, setGenres] = useState<string[]>([]);
    const [image, setImage] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    useEffect(()=>{
        async function getMovieInfo(){
            const poster : string = `https://www.omdbapi.com/?apikey=3a1eedab&i=${name}&plot=full`;

            const response = await fetch(poster,{
                mode : 'cors',
            });
            console.log('fetching Data')
            const data = await response.json();
            console.log(data)   
            return data;
        }
        getMovieInfo().then((data)=>{
            
            if(data.Title){
                setTitle(data.Title);
                setRated(data.Rated);
                setDuration(data.Runtime);
                setGenres(data.Genre.split(','));
                setPlot(data.Plot)
                setImage(data.Poster)
                const prce : number = Math.floor(Math.random()*100);
                setPrice(prce)
            }
        }).catch(err=>console.log(err))
    },[name])
    

    return <div className="flex flex-col content-center justify-center w-screen min-h-screen overflow-scroll shadow-gray-800 dark:bg-slate-950 ">
        <div className=" flex flex-col dark:bg-black dark:border-none gap-2 h-screen content-center self-center w-screen font-bold border lg:xl:w-[80vw] xl:lg:p-7 ">
            <Link className="pt-4 pb-4 pl-2" to={'/Cart'}>
                <span className="self-center pt-10 pb-5 underline xl:lg:pb-4 xl:lg:self-start xl:lg:text-lg text-md">back</span>
                
            </Link>
            <div className="flex h-screen xl:lg:h-[80vh] dark:border-none w-full flex-col self-center xl:lg:justify-center  content-center xl:lg:flex-row">
                <PreviewItem name={name} />

                <div className="flex sm:md:border-2 sm:md:border-b-black dark:border-none shadow-black flex-col justify-self-center xl:lg:w-[50%] rounded-md w-full  p-10 content-center self-center h-full">
                    <div className="flex flex-col self-center gap-4 xl:lg:self-start ">
                        <span className="text-2xl font-bold">{title ? title : 'An error was encountered' }</span>
                        <span className="p-2 text-center text-gray-500 border rounded-sm w-max text-md">{`Rated-${rated}`}</span>
                        <span className="text-md">{duration ? duration : 'duration'}</span>
                        <div className="flex flex-row gap-3">
                            {genres.map((genre,index)=>{
                                return <span key={index} className="text-md">{genre}</span>
                            })}
                        </div>
                        <div className="flex flex-col md:lg:mt-7">
                            <span className='mb-3 font-extrabold underline '>Summary</span>
                            <div className="font-thin plot">
                            {plot}
                            </div>

                            <div>
                            {
                        !presentInCart() ? <button onClick={
                            ()=>{
                                AddToCart();
                            }
                        } className="w-[14rem] p-4 text-green-700 border-2 border-green-700 rounded-sm dark:text-white hover:dark:text-black hover:bg-green-200 mt-14 ">Add to cart</button>
: <button onClick={
                        ()=>{
                            RemoveFromCart();
                        }
            
} className="p-4 text-red-700 border-2 border-red-700 rounded-sm dark:text-white hover:dark:text-black hover:bg-red-200 mt-14 ">Remove from Cart</button>

                    }
                    
                            </div>
                            
                        </div>
                     </div>
                </div>
                
            </div>
           
        </div>
    </div>
}


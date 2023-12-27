import PreviewItem from "../Micro/PreviewItem";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function PreviewPage(){

    const {name} = useParams<{name : string}>();

    
    
    const [title, setTitle] = useState<string>('');
    const [rated, setRated] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(()=>{
        async function getMovieInfo(){
            const poster : string = `http://www.omdbapi.com/?apikey=3a1eedab&i=${name}&plot=full`;

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
            }
        }).catch(err=>console.log(err))
    },[name])
    

    return <div className="flex flex-col content-center justify-center w-screen h-screen shadow-gray-800 dark:bg-slate-950 ">
        <div className=" flex flex-col dark:bg-black dark:border-none gap-2 h-screen content-center self-center w-screen font-bold border lg:xl:w-[80vw] xl:lg:p-7 ">
            <Link to={'/Cart'}>
                <span className="self-center pt-10 pb-5 underline xl:lg:pb-4 xl:lg:self-start xl:lg:text-lg text-md">back</span>
                
            </Link>
            <div className="flex h-screen xl:lg:h-[80vh] dark:border-none w-full flex-col self-center xl:lg:justify-center  content-center xl:lg:flex-row">
                <PreviewItem name={name} />

                <div className="flex sm:md:border-2 sm:md:border-b-black dark:border-none shadow-black flex-col justify-self-center xl:lg:w-[50%] rounded-md w-full  p-10 content-center self-center h-full">
                    <div className="flex flex-col self-center gap-4 xl:lg:self-start ">
                        <span className="text-2xl font-bold">{title ? title : 'An error was encountered' }</span>
                        <span className="p-2 text-center text-gray-500 border rounded-sm text-md">{`Rated-${rated}`}</span>
                        <span className="text-md">{duration ? duration : 'duration'}</span>
                        <div className="flex flex-row gap-3">
                            {genres.map((genre,index)=>{
                                return <span key={index} className="text-md">{genre}</span>
                            })}
                        </div>

                     </div>
                </div>
                
            </div>
           
        </div>
    </div>
}
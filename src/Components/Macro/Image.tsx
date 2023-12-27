import { useEffect, useState } from "react";
import { Titles } from "../../scripts/Titles";
import { Movie } from "../../scripts/Titles";

export default function Image(){
    const [poster, setPoster] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [AgeRestriction, setAgeRestriction] = useState<string>('');
    
    useEffect(()=>{
         const randomMovie : Movie = Titles[Math.floor(Math.random()*Titles.length)];
        const movieTitle : string = randomMovie.title.join('+');
        async function getPoster(){
            const poster : string = 'http://www.omdbapi.com/?apikey=3a1eedab&t='+movieTitle+'';
            const res = await fetch(poster);
            const data = await res.json();

            console.log(data);

            return data;
        }


        getPoster().then((data)=>{
            if(data.Poster){
                setPoster(data.Poster)
                setTitle(data.Title)
                const prce : number = Math.floor(Math.random()*100);
                setPrice('$'+prce.toString())
                setAgeRestriction(data.Rated)
            }
        })

    },[])

    return (
        <div className="flex h-[90vh]  md:h-[100vh] md:lg:w-[70vw] w-screen font-inter flex-col content-center  self-center place-self-center   bg-no-repeat bg-cover bg-center">
            {
                poster.length > 1 ?
                <div className="flex h-[90vh]  md:h-[100vh] md:lg:w-[70vw] w-screen font-inter flex-col content-center  self-center place-self-center   bg-no-repeat bg-cover bg-center " style={
                    {
                        backgroundImage: `url(${poster})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                    }
                }>
                    <div className="flex flex-row   justify-center w-full h-full gap-24  lg:pt-[12rem] pt-[8rem] backdrop-blur-md">
                        <div style={
                            {
                                textShadow: '0px 0px 10px black',
                                filter: 'darken(0.5)'
                            }
                        } className="flex flex-col gap-5 p-3 text-white lg:mt-[1rem]">
        
                            <h1 className="mt-10 text-2xl md:lg:text-4xl ">{title}</h1>
        
                            <p className="text-3xl md:lg:text-7xl first-letter:text-xl ">{price}</p>
        
                            <p className='font-bold border  w-max'>{`Rated ${AgeRestriction}`}</p>
        
        
                            <div className=" w-max h-max"><button className='border-2 backdrop-grayscale transition-transform hover:scale-110 rounded-md mt-14 p-4 w-[13rem] hover:filter'><strong>Add to cart</strong></button></div>
        
                        </div>
                        <div className="hidden img md:lg:block">
                            <img src={poster} alt="" className="rounded-sm shadow-sm " />
                        </div>
                    </div>
                </div>:
                <div role="status" className="flex h-[90vh]  md:h-[100vh] md:lg:w-[70vw] w-screen items-center justify-center  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
              </svg>
                <span className="sr-only">Loading...</span>
            </div>
            
            }
        </div>
    )
}
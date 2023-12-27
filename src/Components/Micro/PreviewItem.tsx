import { useEffect, useState } from "react";

export default function PreviewItem({name} : {name : string | undefined }){

    const [videoFound, setVideoFound] = useState<boolean>(false);
    const [link, setLink] = useState<string>('');
    const [video, setVideo] = useState<string>('');

    useEffect(()=>{
        async function getYoutubeID(){
            const link : string = `https://api.kinocheck.de/movies?imdb_id=${name}`

            const response = await fetch(link,{
                mode : 'cors',
            });
            console.log('fetching')
            const data = await response.json();
            console.log(data)

            return data;
        }
        
        getYoutubeID().then((data)=>{
            if(data.trailer){
                setVideoFound(true);
                setVideo(data.trailer.youtube_thumbnail)
                setLink(data.url)
            
            }
            else{
                setVideoFound(false);
                setLink(data.url)
            }
        }).catch(err=>console.log(err))
    },[name])

    return <div>
        {
            videoFound ? 
            <a className="rounded-md " href={link}>
                <div style={{
                    backgroundImage : `url(${video})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                
                }} className="lg:xl:w-[30vw] w-screen rounded-md h-[50vh] lg:xl:h-[80vh]">
                <div className="flex flex-col xl:lg:w-[100%] rounded-md w-full justify-center content-center self-center h-full border backdrop-blur-md">
                    <a className="self-center " href={link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="self-center w-6 h-6 text-blue-600 hover:text-white">
  <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
</svg>

                    </a>
                </div>
                </div>
            </a> : <a className="rounded-md " href={link}>
                <div className="lg:xl:w-[30vw] w-screen rounded-md h-[40vh] xl:lg:h-[80vh] bg-black">
                <div className="flex flex-col xl:lg:w-[100%] rounded-md w-full justify-center content-center self-center h-full border backdrop-blur-md">
                    <a className="flex flex-col content-center self-center justify-center gap-6 " href={link}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="self-center w-5 h-5 text-blue-600 hover:text-blue-900">
                        <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                        <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                        </svg>
                        <span className="text-white ">No preview available</span>
                    </a>
                </div>
                </div>
            </a>
        }
    </div>
}
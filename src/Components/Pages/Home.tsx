import Image from '../Macro/Image'
import Slider from '../Macro/Slider'
import { Link } from 'react-router-dom'

import { MovieTitles } from '../../scripts/Titles'
import { animeMovies } from '../../scripts/Titles'
import { actionMovies } from '../../scripts/Titles'
import { scienceFictionMovies } from '../../scripts/Titles'
import { mysteryMovies } from '../../scripts/Titles'
import { adventureMovies } from '../../scripts/Titles'
import { comedyMovies } from '../../scripts/Titles'

export default function Home() {
    return (
       <>
        
            <div className='flex flex-col content-center w-screen overflow-hidden '>
                
                <main  className="flex flex-col w-screen overflow-hidden dark:bg-slate-950 bg-slate-200 pb-7 lg:content-center lg:justify-center">
                    <Image />

                    <Slider Titles={MovieTitles} Genre='Most Added Movies'/>
                    <Slider Titles={animeMovies} Genre='Animated/Anime'/>
                    <Slider Titles={actionMovies} Genre='Action'/>
                    <Slider Titles={scienceFictionMovies} Genre='Sci-Fi'/>
                    <Slider Titles={mysteryMovies} Genre='Mystery'/>
                    <Slider Titles={adventureMovies} Genre='Adventure'/>
                    <Slider Titles={comedyMovies} Genre='Comedy'/>

                    <Link className='self-center pt-10 pb-4 text-lg text-green-700 underline md:lg:xl:text-xl hover:no-underline ' to='/Cart'>More Suggestions</Link>
                </main>
               
            </div>
       </>
    )
}
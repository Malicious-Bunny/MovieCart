import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



import { Swiper, SwiperSlide } from 'swiper/react';

import CarouselItem from '../Micro/CarouselItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Movie } from '../../scripts/Titles';

interface Props {
    Titles: Movie[];
    Genre : string;

}

export default function Slider({Titles, Genre}: Props) {
  return (
    <div className='self-center  md:lg:w-[70vw] pr-2 md:lg:p-0  w-screen font-inter '>

        <div className='mt-8 mb-2  font-bold lg:md:ml-[-1.3rem]'>
            <span className='text-sm font-extrabold md:lg:text-xl '>{Genre}</span>
        </div>

        <Swiper 
          // install Swiper modules
          modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
            lazyPreloaderClass='bg-gray-300 dark:bg-gray-700'


        loop={true}
          //AutoPlay infinite slide
          autoplay={{
            delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
          }}
          breakpoints={{
            "640": {
              "slidesPerView": 5,
              "spaceBetween": 0
            },
            "768": {
              "slidesPerView": 2,
              "spaceBetween": 8
            },
            "1024": {
              "slidesPerView": 2,
              "spaceBetween": 10
            },
            "1280": {
              "slidesPerView": 3,
              "spaceBetween": 10
            },
            "1440": {
              "slidesPerView": 4,
              "spaceBetween": 10
            }
            
        
          }}
          scrollbar={{ draggable: true }}
        >
            {Titles.map((movie, index)=>{
                return <SwiperSlide key={index}>
                    <CarouselItem movieTitle={movie.title.join('+')} />
                </SwiperSlide>
            })}
        </Swiper>
    </div>
  );
}
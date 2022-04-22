import React from 'react';
import CarouselCard from './CarouselCard';
// import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from '../node_modules/swiper/react/swiper-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import "swiper/swiper.min.css";
// import "swiper/css/pagination";  
// import "swiper/css/navigation";

// Import Swiper styles
import './swipercarousel.css';

function Carousel( {artworks} ) {

  // const history = useHistory();

  // function nameClick() {
  //   console.log('clicked')
  //   history.push('/artistpage');
  // }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        {artworks.map((art) => {
          return (
            <SwiperSlide key={art.id}>
              <CarouselCard key={art.id} art={art}/>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </>
  )
}

export default Carousel
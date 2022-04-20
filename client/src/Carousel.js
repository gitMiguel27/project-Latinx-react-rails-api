import React from 'react';
import { Swiper, SwiperSlide } from '../node_modules/swiper/react/swiper-react';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import "swiper/swiper.min.css";
// import "swiper/css/pagination";  
// import "swiper/css/navigation";

// Import Swiper styles
import './swipercarousel.css';

function Carousel( {countries} ) {


  const countriesImages = countries.map( country => {
    return (
      <SwiperSlide><img src={country.image} alt={country.name}></img></SwiperSlide>
    )
  })

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {countriesImages}
      </Swiper>
    </>
  
)}



export default Carousel
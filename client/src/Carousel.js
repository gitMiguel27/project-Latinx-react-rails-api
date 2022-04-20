import React from 'react';
import { useHistory } from "react-router-dom";
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

  // const history = useHistory();

  // function nameClick() {
  //   console.log('clicked')
  //   history.push('/artistpage');
  // }

  const countriesImages = countries.map(country => {
    return (
      <SwiperSlide key={country.id}>
        <div className='slide-container'>
          <button onClick={() => console.log('clicked')}>
          <h1>{country.name}</h1>
          <img className="parallax-bg" src={country.image} alt={country.name}></img>
          </button>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        parallax={true}
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
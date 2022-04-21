import React from 'react'



function CarouselCard ({country}) {

    return (
        <div className='slide-container'>
          <h1>{country.name}</h1>
          <img className="parallax-bg" src={country.image} alt={country.name}></img>
        </div>
    )
}

export default CarouselCard;
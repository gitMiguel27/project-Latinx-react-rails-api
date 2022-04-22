import React from 'react'



function CarouselCard ({art}) {

    return (
        <div className='slide-container'>
          <h1>{art.name}</h1>
          <img className="parallax-bg" src={art.image} alt={art.name}></img>
        </div>
    )
}

export default CarouselCard;
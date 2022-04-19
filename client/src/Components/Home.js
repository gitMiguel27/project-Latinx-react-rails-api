import React from 'react';
import Feed from './Feed/Feed.js'
import './Home.css'


function Home () {

    return (
        <div>
            <h1>Home</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/y2ZUyccD3jM?autoplay=1&loop=1" title="Crowd" 
             frameborder='0'
             allow='autoplay; encrypted-media'
             allowfullscreen
             ></iframe>
            {/* <Feed/> */}
        </div>
    )
}

export default Home
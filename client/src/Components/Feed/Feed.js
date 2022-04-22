import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
// // import FeedCard from './FeedCard'
// import "./Feed.css"
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// // Import Swiper styles
// import 'swiper/swiper-bundle.css'
// import "swiper/swiper.min.css";

// // import required modules
// import { Pagination } from "swiper";

function Feed() {

    const [users, setUsers] = useState([]);
    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        fetch('/users')
        .then(resp => resp.json())
        .then(usersData => {
            console.log(usersData)
            setUsers(usersData);
        })
    }, [])

    useEffect(() => {
        fetch('/artworks')
        .then(resp => resp.json())
        .then( artworks => {
            console.log(artworks)
            setArtworks(artworks)
        })
    }, [])


    // const sortedFeed = usersFeed.map((user) => {
    //     return <FeedCard key={user.id} user={user}/> 
    // })

    const artworksdisplay = artworks.map((art) => {
        return  <div className="artpiece" key={art.id}>
            <img  className="art-image" src={art.image} alt={art.name}></img>
                </div>
    })


//Function sorts names alphbetically 
    // const usersFeed = [].concat(users)
    // .sort((a, b) => a.users.nationality > b.users.nationality ? 1 : -1)
    // .map((user, i) => 
    //     <FeedCard key={i} user={user} />
    // );

    // console.log(usersFeed)

    return(
        <>
        <Navbar />
        {/* {sortedFeed} */}
        <div className="artwork-container">  
            {artworksdisplay}
        </div>
    
        </>
    )

}

export default Feed
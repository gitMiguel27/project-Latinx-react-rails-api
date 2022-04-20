import React from 'react';


function FeedCard ({user}) {

    return (
        <div>
            <h1>{user.name}</h1>  
            <div className="user-artwork">
            <img src={user.artwork.image} alt=""></img>
            </div>
        </div>
    )
}

export default FeedCard
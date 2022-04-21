import React from 'react';


function FeedCard ({user}) {

    return (
        <div className="user-list">
            <h1>{user.name}</h1>  
            <div className="user-artwork">
            {/* <img src={user.country.image} alt=""></img> */}
            </div>
        </div>
    )
}

export default FeedCard
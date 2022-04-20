import React from 'react'
import Popup from './ArtistPage/Popup'
import './ArtistPage/Popup.css'


function ArtistCard ({artist}) {

    return (
        <div>
            <div>
            <img src={artist.pic} alt=""></img>
                <p>{artist.name}</p>
                <Popup/>
            </div>
        </div>
    )
}



export default ArtistCard
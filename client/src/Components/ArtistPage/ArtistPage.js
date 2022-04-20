import React, { useEffect, useState } from 'react';
import './ArtistPage.css';

function ArtistPage() {
    
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch('/artists')
        .then(resp => resp.json())
        .then(artistsData => {
            console.log(artistsData)
            console.log(artistsData[0].name)
        })
    }, []);

    return(
        <div>
            Hello from ArtistPage
        </div>
    )

}

export default ArtistPage
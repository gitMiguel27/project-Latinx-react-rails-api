import React, { useEffect, useState } from 'react';
import './ArtistPage.css';
import ArtistCard from '../ArtistCard';

function ArtistPage() {
    
    const [artists, setArtists] = useState([]);
    const loadArtist = artists.map((artist) => {
        return (
            <ArtistCard key={artist.id} artist={artist}/>
        )
    })

    useEffect(() => {
        fetch('/artists')
        .then(resp => resp.json())
        .then(artistsData => {
            console.log(artistsData)
            console.log(artistsData[0].name)
            setArtists(artistsData);
        })
    }, []);


    return(
        <div>
            {loadArtist}
        </div>
    )

}

export default ArtistPage
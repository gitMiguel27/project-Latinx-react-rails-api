import {React,useEffect, useState} from 'react'
import './Mexico.css'




function Mexico () {

    const [artist, setArtist] = useState([])

    useEffect(() => {
        fetch('/artists')
        .then(resp => resp.json())
        .then(artistsData => {
            setArtist(artistsData.filter(artist => artist.nationality === "Mexican"))
        });
        }, [])
        console.log(artist)
    const artistCard = artist.map((art) => {
        return (
            < div key={art.id} className="brazil-container">
            <h3 className='artist-name'>{art.name}</h3>
            <h2 className="art-title">{art.artworks[0].title}</h2>
            <img className="art-image" src={art.artworks[0].image} alt=""></img>
            <h2 className="art-title">{art.artworks[1].title}</h2>
            <img className="art-image" src={art.artworks[1].image} alt=""></img>
            </div>
        )
    })

    return (
        <div>
            {artistCard}
        </div>

    )
}



export default Mexico
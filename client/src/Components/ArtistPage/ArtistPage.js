import React from 'react';
import './ArtistPage.css';

function ArtistPage() {

    // useEffect(() => {
    //     fetch("https://api.artsy.net/api/artworks/516dfb9ab31e2b2270000c45", {
    //         method: "GET",
    //         headers: {
    //             "X-XAPP-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2MjU5OGEwYzA3YzZmYjAwMGU1MmZkMDciLCJleHAiOjE2NTA5ODQ5NjcsImlhdCI6MTY1MDM4MDE2NywiYXVkIjoiNjI1OThhMGMwN2M2ZmIwMDBlNTJmZDA3IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjYyNWVjZDg3MmRiMDZiMDAwYzljYTUxMCJ9.r7Eo6H6Me-fogcfd09ZRZ4sXqIrlZ35W0IBGmVKspuc",
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(resp => resp.json())
    //     .then(artworksData => {
    //         console.log(artworksData)
    //     })
    // }, [])

    return(
        <div>
            Hello from ArtistPage
        </div>
    )

}

export default ArtistPage
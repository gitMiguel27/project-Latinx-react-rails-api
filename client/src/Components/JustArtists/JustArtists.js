import React, { useEffect, useState } from 'react';

function JustArtists() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch('/artists')
        .then(resp => resp.json())
        .then(namesData => {
            console.log(namesData);
            setNames(namesData)
        })
    }, []); 

    const allNames = names.map(name => {
        return <li key={name.name}>{name.name}</li>
    })
    
    return (
        <div>
            Hello from Just Artist
            <ol>
                {allNames}
            </ol>
        </div>
    )
}

export default JustArtists
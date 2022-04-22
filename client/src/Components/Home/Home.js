import React, { useEffect, useState } from 'react';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Carousel from '../../Carousel';
import DropDownMenu from '../DropDownMenu/DropDownMenu'

function Home () {

    const [artworks, setArtworks] = useState([]);

    // useEffect(() => {
    //     fetch('/countries')
    //     .then(resp => resp.json())
    //     .then(countriesData => {
    //         console.log(countriesData)
    //         setCountries(countriesData);
    //     })
    // }, []);

    // useEffect(() => {
    //     fetch('/artists')
    //     .then(resp => resp.json())
    //     .then(namesData => {
    //         console.log(namesData);
    //         setNames(namesData)
    //     })
    // }, []); 
    useEffect(() => {
        fetch('/artworks')
        .then(resp => resp.json())
        .then( artworks => {
            console.log(artworks)
            setArtworks(artworks)
        })
    }, [])


    return (
        <>
            <Navbar />
            <div>
                <Carousel artworks={artworks}/>
            </div>
            <div className="DropDownMenu-container">
            <DropDownMenu/>
            </div>
        </>
    )
}

export default Home
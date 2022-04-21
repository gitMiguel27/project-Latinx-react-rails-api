import React, { useEffect, useState } from 'react';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Carousel from '../../Carousel';

function Home () {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('/countries')
        .then(resp => resp.json())
        .then(countriesData => {
            console.log(countriesData)
            setCountries(countriesData);
        })
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <Carousel countries={countries}/>
            </div>
        </>
    )
}

export default Home
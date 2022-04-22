import React, { useEffect, useState } from 'react';
// import {Switch, Route } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import './JustArtists.css'

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
        return (
        <div className="artist-container">
        <div className="artist">
            <li><a href={name.name} >{name.name}</a></li>
        </div>
        </div>
        )})

    // const allNames = ({match}) => {
    //     const allnames = names.find((name) => {
    //         return parseInt(match.params.nameId) === name.id
    //     })
    // }
        
    return (
        <>
            <Navbar />
            <div>
                <ul className="artist-list">
                    {allNames}
                </ul>
                {/* <Switch>
                    <Route path={':nameId'} component={artistCard} />
                <Switch/> */}
            </div>
        </>
    )
}

export default JustArtists
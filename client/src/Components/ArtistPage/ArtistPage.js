import React from 'react';
import './ArtistPage.css';

function ArtistPage() {
    
    // var request = require('superagent');

    // var clientID = '5144b758b4e10b59a66e',
    //     clientSecret = '7d19dae2da1b5ec2bf6f4e53f0b876c5',
    //     apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
    //     xappToken;
    
    // request
    //   .post(apiUrl)
    //   .send({ client_id: clientID, client_secret: clientSecret })
    //   .end(function(res) {
    //     xappToken = res.body.token; 
    //   });
    
    //   var traverson = require('traverson'),
    //   JsonHalAdapter = require('traverson-hal');
    
    // traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
    // api = traverson.from('https://api.artsy.net/api').jsonHal();
    
    // api.newRequest()
    // .follow('artist')
    // .withRequestOptions({
    //   headers: {
    //     'X-Xapp-Token': xappToken,
    //     'Accept': 'application/vnd.artsy-v2+json'
    //   }
    // }) 

    // .withTemplateParameters({ id: 'andy-warhol' })
    // .getResource(function(error, andyWarhol) {
    //   console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
    // });

    
    return(
        <div>
            Hello from ArtistPage
        </div>
    )

}

export default ArtistPage
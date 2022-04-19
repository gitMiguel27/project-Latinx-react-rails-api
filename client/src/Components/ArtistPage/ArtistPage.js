import {React, useEffect} from 'react';
import './ArtistPage.css';

function ArtistPage() {
    
   
    
   useEffect(()=> {
   fetch("https://api.artsy.net/api/tokens/eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2MjVlYzViN2IwZDY3YzAwMGUyODFkYTAiLCJleHAiOjE2NTA5ODI5NjgsImlhdCI6MTY1MDM3ODE2OCwiYXVkIjoiNjI1ZWM1YjdiMGQ2N2MwMDBlMjgxZGEwIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjYyNWVjNWI4OGQ0OWMyMDAwZWRkZDczMyJ9.LqcmGQ-gqP2MROorvKp7e7VWVGDfvaJtEofjV0YXH1s?client_id=32bcb4560ab17a71e5c8&client_secret=cbbe2dfc512db5f17ce179d43f695a71")
   .then(r => r.json())
   .then(data => console.log(data))
   })

    
    return(
        <div>
            Hello from ArtistPage
        </div>
    )

}

export default ArtistPage
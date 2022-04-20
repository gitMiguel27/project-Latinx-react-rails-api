import React, { useEffect, useState } from 'react'

function Feed() {

    const [users, SetUsers] = useState([]);

    useEffect(() => {
        fetch('/users')
        .then(resp => resp.json())
        .then(usersData => {
            console.log(usersData)
        })
    }, [])

    return(
        <div>
            From Feed Home
        </div>
    )

}

export default Feed
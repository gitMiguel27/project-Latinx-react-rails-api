import React, { useEffect, useState } from 'react'
import FeedCard from './FeedCard'

function Feed() {

    const [users, SetUsers] = useState([]);

    useEffect(() => {
        fetch('/users')
        .then(resp => resp.json())
        .then(usersData => {
            console.log(usersData)
            SetUsers(usersData);
        })
    }, [])

    const usersFeed = users.map((user) => {
        return <FeedCard user={user}/> 
    })

    return(
        <div>
            {usersFeed}
        </div>
    )

}

export default Feed
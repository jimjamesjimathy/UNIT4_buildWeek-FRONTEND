import React from 'react';

export default function User(props) {
    console.log(props)
    return(
        <div className='user'>
            <h1>{props.user.username}</h1>
        </div>
    )
}
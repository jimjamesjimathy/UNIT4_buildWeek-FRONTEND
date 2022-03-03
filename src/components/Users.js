import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../components/User';

export default function UsersList(props) {
    const [users, setUsers ] = useState([]);

    useEffect(() => {
        axios.get('https://unit4-buildweek.herokuapp.com/api/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return(
        <div className='usersList'>
            {users.map(user => {
                <User key={user.id} user={user} />
            })}
        </div>
    )
}
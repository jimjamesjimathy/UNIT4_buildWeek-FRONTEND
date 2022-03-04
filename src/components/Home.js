import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

export default function Home() {
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token) {
            localStorage.removeItem('token');
        } else {

        }
    })

    return(
        <section className='Home'>
            <div className='Home-content'>
                <h1>Anywhere Fitness</h1>
                <p>lorem ipsum dolor sit amet, con
                    lorem ipsum dlorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                    lorem ipsum dolor sit amet, con
                </p>
                <div className='home-links'>
                    <Link className='link1' to='/register'>Register</Link>
                    <Link className='link2' to ='/login'>Login</Link>
                </div>
            </div>
        </section>
    )
};
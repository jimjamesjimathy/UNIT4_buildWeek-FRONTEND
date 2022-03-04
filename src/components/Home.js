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
                <div className='hero-text'>
                    <h3>Welcome to</h3>
                    <h1>Anywhere Fitness</h1>
                </div>
                <div className='hero-paragraph'>
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
                </div>
                <div className='home-links'>
                    <Link className='link1' to='/register'>Register</Link>
                    <Link className='link2' to ='/login'>Login</Link>
                </div>
            </div>
        </section>
    )
};
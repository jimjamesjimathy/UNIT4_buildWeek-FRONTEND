import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../CSS/Header.css';

export default function Header() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  function removeToken() {
    if(token) {
      localStorage.removeItem('token');
    } else {
      navigate('/');
    }
  }
  return (
  <div className='header'>
    <div className='logo'>
      <a href='/'>
      <h3>Anywhere Fitness</h3>
      </a>  
    </div>
    <nav>
      {token ? 
      <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' onclick={removeToken} to='/'>Logout</Link>
      </nav>
      :  
      <nav>
        <Link className='link' to='/register'>Register</Link>
        <Link className='link' to ='/login'>Login</Link>
      </nav>
    }
    </nav>
  </div>
  )
}

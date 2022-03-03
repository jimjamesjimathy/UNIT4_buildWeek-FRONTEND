import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Header.css';

export default function Header() {
  return (
  <div className='header'>
    <div className='logo'>
      <h3>anywhere fitness</h3>  
    </div>
    <nav>
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/register'>Register</Link>
      <Link className='link' to ='/login'>Login</Link>
      <Link className='link' to='/logout'>Logout</Link>
    </nav>
  </div>
  )
}

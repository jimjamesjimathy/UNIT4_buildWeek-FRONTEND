import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
  <div className='header'>   
    <h1>ANYWHERE ANYTIME FITNESS LETS GOOOO WOO</h1>
    <div className='nav'>
      <NavLink className='link' to='/'>Home</NavLink>
      <NavLink className='link' to='/register'>Register</NavLink>
      <NavLink className='link' to ='/login'>Login</NavLink>
      <NavLink className='link' to='/logout'>Logout</NavLink>
    </div>
  </div>
  )
}

export default Header;

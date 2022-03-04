import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token) {
      localStorage.removeItem('token');
    } else {
      navigate('/');
    } 
  },);
  
  return (
    <></>
  )
}

export default Logout;

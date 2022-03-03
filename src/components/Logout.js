import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { push } = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token) {
      localStorage.removeItem('token');
      push('/');
    } else {
      push('/');
    } 
  })
  
  return (
    <div></div>
  )
}

export default Logout;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import url from './URL';
import '../CSS/Register.css';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  role_type: ''
}

const initialError ={
  error: ''
}

const Register = () => {
  const navigate = useNavigate();
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ error, setError ] = useState(initialError);

    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [ e.target.name ]: e.target.value
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth().post(`${url}api/auth/register`, formValues)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          navigate('/');
        })
        .catch(err => {
          setError({
            error: err.response.data.message
          });
        })
    }

    return(
      <section className='login'>
        <form onSubmit={handleSubmit}>
        <div className='register-wrapper'>
        <label>Email:
          <input
            value={formValues.email}
            name='email'
            type='email'
            placeholder='Enter your email here'
            onChange={handleChange}
          />
        </label>
        <label>Username:
          <input 
            value={formValues.username}
            name='username'
            type='text'
            placeholder='Enter your new username here'
            onChange={handleChange}
          />
        </label>
        <label>Password:
          <input
            value={formValues.password}
            name='password'
            type='password'
            placeholder='Enter your new password here'
            onChange={handleChange}
          />
        </label>
        <label>Role:
          <input 
            value={formValues.role_type}
            name='role_type'
            type='text'
            placeholder='Enter role type'
            onChange={handleChange}
          />
        </label>
        <button>Register</button>
        <p>{error.error}</p>
        </div>
      </form>  
      </section>
    )
}

export default Register;

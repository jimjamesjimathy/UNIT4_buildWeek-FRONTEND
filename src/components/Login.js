import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import url from './URL';
import '../CSS/Login.css';


const initialFormValues = { 
  username: '',
  password: ''
}

const errorValues = {
  error: '',
}

export default function Login() {
    const { push } = useNavigate();
    const [ formValues, setFormValues ] = useState(initialFormValues);
    const [ error, setError ] = useState(errorValues);

    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [ e.target.name ]: e.target.value
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth().post(`${url}api/auth/login`, formValues)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          // update push below to dashboard route when complete
          push('/');
        })
        .catch(err => {
          setError({
            error: err.response.data.message});
        })
      }

    return(
      <section className='login'>
        <form onSubmit={handleSubmit}>
        <div className='register-wrapper'>            
        <label>Username:
          <input 
            value={formValues.username}
            name='username'
            type='text'
            placeholder='Username'
            onChange={handleChange}
          />
        </label>
        <label>Password:
          <input 
            value={formValues.password}
            name='password'
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </label>
        <button>Log In</button>
        <p>{error.error}</p>
        </div>
      </form>
      </section>
    )
};


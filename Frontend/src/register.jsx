import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/register', values)
      .then(res => {
        console.log(res.data); // Logging response from server
        // Redirect to another route or show a success message to the user
      })
      .catch(err => {
        console.error(err); // Logging any errors
        // Handle error scenarios, like displaying an error message to the user
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'Orange', minHeight: '100vh' }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2> Sign-Up </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              placeholder='Enter Name'
              name='name'
              onChange={e => setValues({ ...values, name: e.target.value })}
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type="email"
              placeholder='Enter Email'
              name='email'
              onChange={e => setValues({ ...values, email: e.target.value })}
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder='Enter Password'
              name='password'
              onChange={e => setValues({ ...values, password: e.target.value })}
              className='form-control rounded-0'
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
          <p>You agree to our terms and policies</p>

          <button><Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Register;

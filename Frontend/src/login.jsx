import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'Orange', minHeight: '100vh',alignItems: 'center', justifyContent: 'center' }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2> Login </h2>
        <form>

          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Name' name='email'
              className='form-control rounded-0' />
          </div>

          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='password'
              className='form-control rounded-0' />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
          <p>You agree to our terms and policies</p>

          <button><Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Signup</Link></button>

          <button><Link to="/TextColumn" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create List</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Login;

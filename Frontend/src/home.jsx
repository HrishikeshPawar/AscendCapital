import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: 'Orange', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'Cyan', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', textAlign: 'center' }}>
        <h1>Home Page</h1>
        <p>Welcome To Home Page</p>
        
      </div>

      <button><Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Signup</Link></button><br></br>
      <button><Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link></button><br></br>
      <button><Link to="/TextColumn" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create List</Link></button>     

    </div>
  );
}

export default Home;

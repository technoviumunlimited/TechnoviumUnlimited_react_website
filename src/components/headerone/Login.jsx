import React from 'react'
import './Login.scss';

const Login = () => {

  const LoginBtn = () => {
    console.log("you registered in");
  }

  return (
    
    <div className="container">

      {/* Form */}
      <form action="">

        <div className="login-section">
          
          {/* Login - Username section */}
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Username ...' />

          {/* Login - Password section */}
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password ...' />

          <button id='1'>Login</button>
        </div>

        <div className="login-section">
          {/*Register - Username section */}
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Username ...' />

          {/*Register - Password section */}
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password ...' />

          <button id='2' onClick={ LoginBtn }>Register</button>
        </div>

      </form>
    </div>

  )
}

export default Login
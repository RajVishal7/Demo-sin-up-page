import React, { useState } from 'react'


export default function FORM() {
  const [isLogin, setIsLogin] = useState(true); 
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin
            (true)}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin
            (false)}>SignUp</button>
        </div>
        {isLogin ? <>
          <div className='form'>
            <h2>Login form</h2>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <a href='#'>Forget Password?</a>
            <button>Login</button>
            <p>Not a member? <a href='#' onClick={() => setIsLogin(false)}>SignUp now</a></p>
          </div>
        </> : <>
          <div className='form'>
            <h2>SignUp Form</h2>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <input type='password' placeholder='ConformPassword'></input>
            <button>SignUp</button>
          </div>
        </>}
      </div>
    </div>
  )
}


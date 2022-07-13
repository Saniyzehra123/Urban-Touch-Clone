import React from 'react'
import Button from '@mui/material/Button';
import "./Login.css"
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
  return (
    <div  >
        {/* <Link to="/"> <Navbar/> </Link> */}
        <h1>Login</h1>
        <input
          className="Input"
            type="text"
            placeholder="Email"
            // value={email}
            
          />
       
        <br />
       
          <input
           className="Input"
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
      
        <br />
        <div className='login'> 
        <p>Forgot your password</p>
        <br />
        <button style={{backgroundColor:"#0b0b0b",color:"white", width:"14%" ,height:"40px",borderRadius:"none" ,fontSize:"15px"}}  >
            Sign in
        </button>
         
        
        <p>
           Create account
        </p>
        </div>
    </div>
  )
}

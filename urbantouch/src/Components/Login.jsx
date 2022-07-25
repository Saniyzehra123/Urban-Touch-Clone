import React, { useState } from 'react'
import Button from '@mui/material/Button';
import "./Login.css"
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {useDispatch} from 'react-redux';
import { signIn } from '../Redux/auth/action';

export default function Login() {
const dispatch = useDispatch();
 const [userEmail, setUserEmail] =useState("eve.holt@reqres.in");
const [userPassword, setUserPassword] = useState("");

const handelUserEmail = (e) => {
  setUserEmail(e.target.value);
}

const handelUserPassword = (e) => {
  setUserPassword(e.target.value);
}
const submitHandler = (e) => {
 
 e.preventDefault();
 console.log("UserEmail",userEmail,"UserPassword",userPassword);
   dispatch(signIn({email:userEmail,password:userPassword})) ;
}
console.log(userEmail, userPassword)
  return (
    <div  >
        {/* <Link to="/"> <Navbar/> </Link> */}
        <h1 className='log'>Login</h1>
        <form onSubmit={submitHandler}> 
        <input
      
          className="Input"
            type="text"
            placeholder="Email"
            // value={email}
            value={userEmail}
            onChange={handelUserEmail}
            required
     
          />
       
        <br />
       
          <input
            className="Input2"
            type="password"
            placeholder="Password"
          
           value={userPassword}
            onChange={handelUserPassword}
            required
      />
      
        <br />
        <div className='login'> 
        <p>Forgot your password</p>
        <br />
        <button style={{backgroundColor:"#0b0b0b",color:"white", width:"14%" ,height:"40px",borderRadius:"none" ,fontSize:"15px"}} 
          // onClick={ handelSubmit}
        type="submit"
        >
            Sign in
        </button>
        
        
        <p>
           Create account
        </p>
        
        </div>
        </form>
    </div>
  )
}

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import "./Login.css"
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {useDispatch} from 'react-redux';
import { signIn } from '../Redux/auth/action';
import {useNavigate} from "react-router-dom"

export default function Login({handleChange}) {
 //States
 const navigate = useNavigate();
 const [ formData, setForm ] = useState({
   email: "",
   password: "",
 });

 const handleInput = (e) => {
   const { id, value } = e.target;

   setForm({
     ...formData,
     [ id ]: value,
   });
 };

 const handleSubmit =async (e) => {
   if (formData.email === "" || formData.password === "") {
     return;
   }
   e.preventDefault();
   // console.log(formData);
   
     let loginData = JSON.stringify(formData);
     console.log(loginData);
   const result = await fetch('https://urbantouchclone.herokuapp.com/login',{
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: loginData
   })
   const data = await result.json()
   console.log("logindata", data)


   if(data.status === "ok"){
     alert("success");
     return navigate("/  ")

   } else {
     alert(data.error);
   }
   
 }
  return (
    <div  >
        {/* <Link to="/"> <Navbar/> </Link> */}
        <h1 className='log'>Login</h1>
        <form > 
        <input
      
          className="Input"
            type="text"
            placeholder="Email"
            onChange={ handleInput }
            required
          />
       
        <br />
       
          <input
            className="Input2"
            type="password"
            placeholder="Password"
           onChange={ handleInput }
            required
      />
      
        <br />
        <div className='login'> 
        <p>Forgot your password</p>
        <br />
        <button style={{backgroundColor:"#0b0b0b",color:"white", width:"14%" ,height:"40px",borderRadius:"none" ,fontSize:"15px"}} 
        onClick={ handleSubmit}
        type="submit"
        >
            Sign in
        </button>
        
        
       <Link to="/signup" ><p  className="acount" onClick={ () => handleChange("event", 1) }>
           Create account
        </p>
        </Link>
        </div>
        </form>
    </div>
  )
}



// const dispatch = useDispatch();
//  const [userEmail, setUserEmail] =useState("eve.holt@reqres.in");
// const [userPassword, setUserPassword] = useState("");

// const handelUserEmail = (e) => {
//   setUserEmail(e.target.value);
// }

// const handelUserPassword = (e) => {
//   setUserPassword(e.target.value);
// }
// const submitHandler = (e) => {
 
//  e.preventDefault();
//  console.log("UserEmail",userEmail,"UserPassword",userPassword);
//    dispatch(signIn({email:userEmail,password:userPassword})) ;
// }
// console.log(userEmail, userPassword)
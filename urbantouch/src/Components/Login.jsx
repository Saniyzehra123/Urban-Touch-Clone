import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import "./Login.css"
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import {useDispatch, useSelector} from 'react-redux';
import { signIn } from '../Redux/auth/action';
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react';

export default function Login({}) {
 
 const [email,setEmail] = useState("");
 const [password,setPassword]= useState("")

 const navigate = useNavigate();
 const dispatch = useDispatch()
const location = useLocation()

const all = useSelector((state)=>state.signIn)
 
//  useEffect(()=>{
//        dispatch(signIn)
//  },[])
  
 
 const handleSubmit  =(e) => {
      if (email.email === "" || password.password === "") {
    return;
  }
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    console.log(userDetails,"userlog")
      dispatch(signIn(userDetails))
      
    if(userDetails.email != "" && userDetails.password !=""){
      alert("success")
        return navigate("/")
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
            // name='email'
            value={email}
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
       
        <br />
       
          <input
            className="Input2"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
         onChange={(e)=>setPassword(e.target.value) }
            required
      />
      
        <br />
        <div className='login'> 
        <p>Forgot your password</p>
        <br />
        <button style={{backgroundColor:"#0b0b0b",color:"white", width:"14%" ,height:"40px",borderRadius:"none" ,fontSize:"15px"}} 
        onClick={handleSubmit}
        type="submit"
        >
            Sign in
        </button>
        
        
       <Link to="/signup" ><p  className="acount"  >
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









//sagar do it by react


// //States


// const dispatch = useDispatch()

// useEffect(()=>{
//       dispatch(signIn)
// },[])
// const navigate = useNavigate();
// const [ formData, setForm ] = useState({
//   email: "",
//   password: "",
// });

// const handleInput = (e) => {
//   const {name, value } = e.target;

//   setForm({
//     ...formData,
//     [name]: value,

//   });
// };
//  console.log("form",formData);
// const handleSubmit =async (e) => {
//   if (formData.email === "" || formData.password === "") {
//     return;
//   }
//   e.preventDefault();
//  console.log(formData);
  
//     let loginData = JSON.stringify(formData);
//     console.log(loginData);
//   const result = await fetch('https://urbantouchclone.herokuapp.com/login',{
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: loginData
//   })
//   const data = await result.json()
//   console.log("logindata", data)


//   if(data.status === "ok"){
//     alert("success");
//     return navigate("/")

//   } else {
//     alert(data.error);
//   }
  
// }
//  return (
//    <div  >
//        {/* <Link to="/"> <Navbar/> </Link> */}
//        <h1 className='log'>Login</h1>
//        <form > 
//        <input
     
//          className="Input"
//            type="text"
//            name='email'
//            value={formData.email}
//            placeholder="Email"
//            onChange={handleInput}
//            required
//          />
      
//        <br />
      
//          <input
//            className="Input2"
//            type="password"
//            name="password"
//            value={formData.password}
//            placeholder="Password"
//         onChange={ handleInput }
//            required
//      />
     
//        <br />
//        <div className='login'> 
//        <p>Forgot your password</p>
//        <br />
//        <button style={{backgroundColor:"#0b0b0b",color:"white", width:"14%" ,height:"40px",borderRadius:"none" ,fontSize:"15px"}} 
//        onClick={handleSubmit}
//        type="submit"
//        >
//            Sign in
//        </button>
       
       
//       <Link to="/signup" ><p  className="acount"  >
//           Create account
//        </p>
//        </Link>
//        </div>
//        </form>
//    </div>
//  )
// }
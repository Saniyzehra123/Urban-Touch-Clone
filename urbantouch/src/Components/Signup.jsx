import React, { useState } from 'react';
import "./Signup.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {

  const navigate = useNavigate();


  //States
  const [ formData, setForm ] = useState({
    firstName : '',
    lastName:"saniya",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName === "" || formData.email === "" || formData.password === ""){
      return
    }

    const {data} = await axios.post("https://urbantouchclone.herokuapp.com/register", formData)
    console.log(data)
    
    if (data.status === "ok") {
      alert("Register Successfully");
      navigate('/account#')
    } 
    else {
      alert("email should be unique");
    }
    
  }
  




  return (
    <div className='signupcontainer'>
      <h1 className='heading1'>Create account</h1>
      <form className='signupinput'> 
        <input type="text" placeholder="First name" onChange={ handleInput } className='detail' />
        <br/>
        <input type="text" placeholder="Last name" onChange={ handleInput } />
        <br/>
        <input type="email" placeholder="Email" onChange={ handleInput } />
        <br/>
        <input type="password" placeholder="Password" onChange={ handleInput } />
        <br/>

        <input type="button" value="create" className='signupbutton'  onClick={ handleSubmit } />
      </form>

    </div>
  )
}





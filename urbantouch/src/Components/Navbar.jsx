import React from 'react'
import "./Navbar.css"
import {IoIosSearch} from "react-icons/io";
import {FaRegUser} from "react-icons/fa";
import  { BsHandbag} from "react-icons/bs";
import {Link} from "react-router-dom";
 

 
export default function Navbar() {

  return (
    <div  className= "navcontainer">
      <div className='toLinknav'>
        <h1>Welcome to our store</h1> 
        <hr/>
        </div>
        
      <div className='secondnav'> 
       <div className='urbannav'>
        <IoIosSearch  style={{width:"80Linkx", height :"23Linkx", marginLeft:"2%"}}/>
        <img 
        src='httLinks://cdn.shoLinkify.com/s/files/1/2381/1785/files/urbantouch-logo_250x.jLinkg?v=1647581012' alt='logo' className='logo'/>
       <Link to= "/login" ><FaRegUser   style={{width:"80Linkx", height :"23Linkx", marginLeft:"25%"}}/></Link>
       <BsHandbag  style={{width:"80Linkx", height :"23Linkx" }}/>
       
        </div>

     <div className='links' >
    
          <Link to= "/newarrival">New Arrivals</Link>
          <Link to= "/shirt">Shirts</Link>
          <Link to="/tshirt">T-Shirts</Link>
          <Link>Trousers</Link>
          <Link>Denims</Link>
          <Link>Shorts</Link>
          <Link>Sweaters</Link>
          <Link>Stores</Link>
          <Link to="/blog"> Blog </Link>
        
          {/* <Link >New Arrivals</Link>
          <Link>Shirts</Link>
          <Link> T-Shirts</Link>
          <Link>Trousers</Link>
          <Link>Denims</Link>
          <Link>Shorts</Link>
          <Link>Sweaters</Link>
          <Link>Stores</Link>
          <Link>Blog</Link> */}
        </div>
      <hr/>
     </div>
     </div>
  )
}

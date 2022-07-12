import React from 'react'
import "./Navbar.css"
import {IoIosSearch} from "react-icons/io";
import {FaRegUser} from "react-icons/fa";
import { BsHandbag} from "react-icons/bs";
 

 
export default function Navbar() {

  return (
    <div  className= "navcontainer">
      <div className='topnav'>
        <h>Welcome to our store</h> </div>
      <div className='secondnav'> 
       <div className='urbannav'>
        <IoIosSearch/>
        <img src='https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch-logo_250x.jpg?v=1647581012' alt='logo' className='logo'/>
       <FaRegUser/>
       <BsHandbag  style={{width:"80px", height :"25px"}}/>
       
        </div>

     <div className='links' >
    
          <p>New Arrivals</p>
          <p>Shirts</p>
          <p>T-Shirts</p>
          <p>Trousers</p>
          <p>Denims</p>
          <p>Shorts</p>
          <p>Sweaters</p>
          <p>Stores</p>
          <p>Blog</p>
        
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

     </div>
     </div>
  )
}

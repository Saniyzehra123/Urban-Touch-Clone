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
        <IoIosSearch  style={{width:"20px", height :"40px", marginLeft:"2%"}}/>
     <Link to="/" > 
     <img    className="touch"
        src='https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch-logo_250x.jpg?v=1647581012' alt='logo' className='logo'/>
      </Link>  
       <Link to= "/login" ><FaRegUser   style={{width:"20px", height :"40px",color:"black", marginLeft:"25%"}}/></Link>
      <Link to="/information" > <BsHandbag  style={{width:"20px", height :"40px", marginLeft:"20px" ,color:"black"}}/></Link>
       
        </div>

     <div className='links' >
    
          <Link to= "/newarrival">New Arrivals</Link>
          <Link to= "/shirt">Shirts</Link>
          <Link to="/tshirt">T-Shirts</Link>
          <Link to="/trouser">Trousers</Link>
          <Link to="/denims">Denims</Link>
          <Link to="/shorts">Shorts</Link>
          <Link to="/sweater">Sweaters</Link>
          {/* <Link>Stores</Link> */}
          <Link to="/blog"> Blog </Link>
          {/* <Link to="/productdetails">Product Details</Link> */}
        
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

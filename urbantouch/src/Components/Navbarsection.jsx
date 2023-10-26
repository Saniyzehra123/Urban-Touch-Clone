import React from 'react'
import "./Navbar.css"
import {IoIosSearch} from "react-icons/io";
import {FaRegUser} from "react-icons/fa";
import  { BsHandbag} from "react-icons/bs";
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';

function Navbarsection() {
  return (
    <div style={{position:"fixed",width:"100%",zIndex:3,background:"white",top:"0"}}>
      <h6 className="topnav text-center py-2 bg-black text-white ">Get 15% off on your first order use code 'NEW15'. Enjoy FREE SHIPPING On all orders above Rs.999. COD available.</h6>
      <Navbar className="justify-content-between"     >
        <Container>
        <Navbar.Brand>
            <IoIosSearch className='search'  />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch-logo_250x.jpg?v=1647581012"
              // width="30"
              // height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Brand>
        <Link to= "/login" ><FaRegUser className='login'  style={{width:"20px", height :"40px",color:"black", marginLeft:"25%"}}/></Link>
         <Link to="/yourcart" ><BsHandbag  style={{width:"20px", height :"40px", marginLeft:"20px" ,color:"black"}}/></Link>
        </Navbar.Brand>
        </Container>

 
      </Navbar>
     
      <Nav variant="underline"className="justify-content-center" activeKey="/home" >
        
        <Nav.Item>
          <Nav.Link href="/shirt" style={{ color:"black",textDecoration:"none"}}>Shirts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tshirt" style={{ color:"black",textDecoration:"none"}}>T-Shirts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bottom" style={{ color:"black",textDecoration:"none"}}>Bottom</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/shorts" style={{ color:"black",textDecoration:"none"}}>Shorts </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog" style={{ color:"black",textDecoration:"none"}}> Blog </Nav.Link>
        </Nav.Item>
      </Nav>
      
 
    
     
      
     </div>
  )
}

export default Navbarsection


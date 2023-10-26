import React from 'react'
import "./Fotter.css"
import { Container, Row, Col } from 'react-bootstrap';
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter} from 'react-icons/io'
import {BsWhatsapp} from "react-icons/bs"; 
export default function Fotter() {
  return (
    <footer className="footer">
    {/* <Container> */}
      <div className="fotboder"></div>
      <Row className='mt-3'>
        <Col md={4}>
          <h3>The Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Franchisee Enquiry</li>
            <li>Size Charts</li>
          </ul>
        </Col>
        <Col md={4}>
          <h3>Policy  </h3>
          <ul>
            <li>Franchisee Enquiry</li>
            <li>Privacy Policy</li>
            <li>Returns/Refunds/Exchange</li>
            <li>Terms & Conditions</li>
          </ul>
        </Col>
        <Col md={4}>
          <h3>Quick Connect</h3>
          <p>Get our chat support on any queries <br/> message at +917824855595</p>
        </Col>
      
      </Row>
      <Row  className='justify-content-around'>
      <Col md={4}>
          <div className="subscribe">
            <h3>Subscribe to our emails</h3>
            <input type="text" placeholder="Email" />
             
          </div>
        </Col>
        <Col md={3} >
        <div className="icon">
              <IoLogoFacebook />
              <IoLogoInstagram />
              <IoLogoTwitter />
              <BsWhatsapp />
              {/* Add other social media icons */}
            </div>
        </Col>
      </Row>
      <hr />
      <Row className="payment-cards-footer">
        <Col md={3}>
          <img
            src="https://github.com/Saniyzehra123/urban_Images/assets/96076158/b1d3e258-216d-4a99-96b8-b33000bf7fc5"
            alt="Payment Card 1"
            className='payment'
          />
        
          <img
            src='https://user-images.githubusercontent.com/96076158/277984939-6b3462d2-2536-4069-a02f-e3859569baf8.png'
            alt="Payment Card 1"
            className='payment'
          />
        
          <img
            src=' https://user-images.githubusercontent.com/96076158/277985096-2df8ad60-b668-4602-85be-26060db0658f.png'
            alt="Payment Card 1"
            className='payment'
          />
        
          <img
            src='https://user-images.githubusercontent.com/96076158/277985154-c9497508-9847-4c38-8b21-d57262553b76.jpeg'
            alt="Payment Card 1"
            className='payment'
          />
        
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyH5VrF6gXaaY_Gk76lKaKKlsJpprOdZAfA&usqp=CAU"
            alt="Payment Card 2"
            className='payment'
          />
        </Col>
        
      </Row>
    {/* </Container> */}
  </footer>
  )
}

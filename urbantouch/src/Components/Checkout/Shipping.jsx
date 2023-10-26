import { Link } from 'react-router-dom';
import React from 'react'
import { IoChevronBackCircle} from "react-icons/io5";
import "./Shipping.css"
import { Button, Col, Container, FloatingLabel, Form, FormControl, Row, } from 'react-bootstrap'
// import { Button } from 'react-bootstrap';

export default function Shipping() {
  return (
    <div className='ship'>

    <div className="contactship">
      <div className='szcontainer'> 
      <div className='contactinfo'> 
      <div> 
      <h1 className='shiphead'>Contact  </h1>
      <p>+91 788979</p>
      <p>Change</p>
      </div>
      </div>
      
      <div className='shipto'>
      <div> 
      <h1>Ship to</h1>
      <p>310/290C1 bajpainagar </p>
      <p>Change</p>
    </div>
    </div>
    </div>

    <h1 className='standard'>Shipping method</h1>
    <div className='method'> 
    <div>
      <div className='circle'></div>
    </div>
    <p >Standard Shipping</p>
    <p>Free</p>
    </div>

  <div className='szshipreturn'> 
     
    <p><IoChevronBackCircle className='back'/>Return to cart</p>

    <Link to='/information/shipping/payment'>  <Button variant="success"  >Continue to Payment</Button> </Link> 
 
  </div>

   
    </div>

    {/* ///coupon code */}
    <Col md={4} className="shipleft">
        <div className="shipcoupon-box">
          <div className="shipcoupon-img"></div>
          <div className="shipcoupon-name"></div>
        </div>
        <hr className="hr" />
        <input placeholder="Discount code" className="shipdiscount" />
        <button className="shipapply">Apply</button>
        <hr />
        <div className="shipsubtotal">
          <div>
            <p>Subtotal</p>
            <p>Shipping</p>
          </div>
          <div className="shipcal">
            <p>$0.00</p>
            <p>Calculated at next step</p>
          </div>
        </div>
        <hr />
        <div className="shiptotal">
          <div>
            <p>Total</p>
            <p>INR ₹5,796.00</p>
          </div>
        </div>
      </Col>
   
  </div>
  )
}

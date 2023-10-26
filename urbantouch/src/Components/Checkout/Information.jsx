import React from 'react'
import { Link } from 'react-router-dom'
import "./Information.css" 
import PhoneInput from 'react-phone-number-input'
import { Button, Col, Container, FloatingLabel, Form, FormControl, Row, } from 'react-bootstrap'
import { IoChevronBackCircle} from "react-icons/io5";
export default function Information() {

  
  return (
    <Container className='infocontainer'>
    <Row className="information">
      <Col md={8}>
        <div className="contact-box">
          <div className="already">
            <h1 className='contact'>Contact Information</h1>
            <p>Already have an account? Log in</p>
          </div>
          <FloatingLabel controlId="floatingInput" label="Email or mobile phone number" >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form>  <Form.Check className="check" type="checkbox" label="Email me with news and offers" /> </Form>
          </Form.Group>
          <h1 className="shipping">Shipping Address</h1>
          <Form.Select disabled  >
         <option>India</option>
         </Form.Select>
          <Row>
            <Col md={6}>
              <FloatingLabel controlId="firstName" label="First Name">
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="lastName" label="Last Name">
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="address" label="Address">
            <Form.Control type="text" placeholder="Address" />
          </FloatingLabel>
          <FloatingLabel controlId="apartment" label="Apartment, suite, etc. (optional)">
            <Form.Control type="text" placeholder="Apartment, suite, etc. (optional)" />
          </FloatingLabel>
          <Row>
            <Col md={4}  className='mt-1' >
              <FloatingLabel controlId="city" label="City">
                <Form.Control type="text" placeholder="City" />
              </FloatingLabel>
            </Col>
            <Col md={4} className='mt-3'>
            <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>
            </Col>
            <Col md={4}  className='mt-1'>
              <FloatingLabel controlId="pinCode" label="Pin code">
                <Form.Control type="text" placeholder="Pin code" />
              </FloatingLabel>
            </Col>
          </Row>
          <div >
          <Form>  <Form.Check className="save" type="checkbox" label="Save this information for next time" /> </Form>
            {/* <div>
              <input type="checkbox" className="check" />
              <p>Save this information for next time</p>
            </div> */}
          </div>
          <div className="return">
            <p> <IoChevronBackCircle className='back'/> Return to cart  </p>
            <Link to="/information/shipping">
              <Button variant="success"  >Continue to shipping</Button>
            </Link>
          </div>
        </div>
      </Col>

      <Col md={4} className="left">
        <div className="coupon-box">
          <div className="coupon-img"></div>
          <div className="coupon-name"></div>
        </div>
        <hr className="hr" />
        <input placeholder="Discount code" className="discount" />
        <button className="apply">Apply</button>
        <hr />
        <div className="subtotal">
          <div>
            <p>Subtotal</p>
            <p>Shipping</p>
          </div>
          <div className="cal">
            <p>$0.00</p>
            <p>Calculated at next step</p>
          </div>
        </div>
        <hr />
        <div className="total">
          <div>
            <p>Total</p>
            <p>INR ₹5,796.00</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

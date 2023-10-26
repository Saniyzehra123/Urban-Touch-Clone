
import React from 'react'
import "./paymentpage.css"
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

export default function PaymentPage() {
  const [showBillingDetails, setShowBillingDetails] = useState(false);

  const toggleBillingDetails = () => {
    setShowBillingDetails(!showBillingDetails);
  };
  return (
    <div>
        <div className='paymentcheck'>
        <Container>
      <Row>
      <Col md={6}>
          <div className="payment-form">
            <h2>Payment Details</h2>
            <Form>
              <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your card number" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Name on Card</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control type="text" placeholder="MM/YY" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="CVV" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Payment Method</Form.Label>
                <Form.Control as="select">
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Net Banking</option>
                  <option>UPI</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Pay Now
              </Button>
            </Form>
             
          </div>
        </Col>
        <Col md={6}>
          <div className="billing-address">
            <h2>Billing Address</h2>
            <Form>
              <Form.Check
                type="radio"
                label="Same as shipping address"
                name="billingAddress"
                id="sameAddress"
              />
              <Form.Check
                type="radio"
                label="Use a different billing address"
                name="billingAddress"
                id="differentAddress"
                onChange={toggleBillingDetails}
              />
              {showBillingDetails && (
                <div className="billing-details">
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="India" />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Add a house number if you have one</Form.Label>
                    <Form.Control type="text" placeholder="House number" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Apartment, suite, etc. (optional)</Form.Label>
                    <Form.Control type="text" placeholder="Apartment, suite, etc." />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>PIN code</Form.Label>
                        <Form.Control type="text" placeholder="PIN code" />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              )}
            </Form>
            <p className="cash-on-delivery-text">
              Or choose Cash on Delivery (COD).
            </p>
          </div>
        </Col>
      </Row>
    </Container>

  {/* ///coupon code */}
  {/* <Col md={4} className="shipleft">
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
      </Col> */}



        </div>
    </div>
  )
}

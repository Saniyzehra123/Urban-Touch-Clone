 
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { getTShirtData } from '../../Redux/T-shirt/action';
 import "../ProductPage/Tshirt.css";
import { Card, Col,FormCheck, Row ,Accordion} from 'react-bootstrap';
import { AiFillHeart, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiRupee } from 'react-icons/bi';
import Form from 'react-bootstrap/Form';

export default function Tshirt() {
    const [data,setdata] = useState([]);
    const [clicked,setClicked]=useState(false)

    const handelClick=()=>{
      setClicked(!clicked)
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const  tshirts = useSelector( store =>  store.tshirtreducer.tshirts);
  
 //     // const {loading,error} = useSelector( store =>  store.newarrival);
 
   useEffect(() => {
      dispatch(getTShirtData());
  },[dispatch.tshirts?.length]);
   console.log("tshirt",tshirts)
return (
 <div>
    
    <h1 className='heading'> T SHIRTS</h1>
      <h2 className='subtitle'> Features t-shirt collection from urbantouch, Choose your favourite outfit  <br/>  from a wide range of collection.</h2>
      <Row>
        <Col className="float-start" xs={12} md={2} ms={4} lg={2} >
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>
          <Form>
            <FormCheck
            type='checkbox'
            label="Blue"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="White"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="Grey"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="Green"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="Yellow"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="Teal Blue"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="Peach"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="NavyBlue"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="Black"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="Red"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="AquaGreen"
            />
          </Form>
         
       </Accordion.Body>
       </Accordion.Item>   
       </Accordion>

       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
          <Form>
            <FormCheck
            type='checkbox'
            label="S"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="XL"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="M"
            />
          </Form>
       </Accordion.Body>
       </Accordion.Item>   
       </Accordion>
     
       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
          <Form>
            <FormCheck
            type='checkbox'
           
            label="1200"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
          
            label="1400"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="1500"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="1566"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="1600"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="1650"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="1700"
            />
          </Form>
       </Accordion.Body>
       </Accordion.Item>   
       </Accordion>
       </Col>
      
    {/* <div className='tshirtcontainer'>  */}
   {
      tshirts.map((tshirt,index)=>{
          return(
            <Col className='float-end' xs={12} md={2} ms={4} lg={3}  style={{padding:"20px"}}  key={tshirt.id}>  
              <Card style={{ width: '15rem',height:"400px"}}   >
              <div className='tshirt-div' onClick={handelClick}>  
                <div> 
                  {clicked ? (
                   <AiOutlineHeart className='heart'   />
                      ) : (
                    <AiFillHeart className='heart'   />
                      )}
                </div>            
                <NavLink to={`/${"tshirt"}/${tshirt._id}`}> 
                  <Card.Img variant="top" src={tshirt.image}  className='tshirtimg' alt="img"/>
                </NavLink>
              </div>
                <Card.Title style={{fontSize:15,height:"40px",padding:"10px"}}>{tshirt.title}</Card.Title>
                  <Col className='p-2 d-flex justify-content-between '> 
                  <Card.Text  className='tshirttext'>
                    <BiRupee/>
                    {tshirt.price}
                  </Card.Text>
                  </Col>
           
               
              </Card>
              </Col>
          )
      })
   }
 
 {/* </div> */}
  </Row>
 </div>
)
  
}

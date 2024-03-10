import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { getShirtData } from '../../Redux/Shirt/action';
import "../ProductPage/Shirts.css";
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import { Col, Container, FormCheck, Row ,Accordion, Card} from 'react-bootstrap';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';


export default function Shirt() {

  const [data,setdata] = useState([]);
  const [clicked,setClicked]=useState(false)
  const [category,setcategory]=useState([])
  const handelClick=()=>{
    setClicked(!clicked)
  }
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  shirts = useSelector( store =>  store.shirtreducer.shirts);
    //     // const {loading,error} = useSelector( store =>  store.newarrival);
    
///////filter////////////

const [searchParams, setSearchParams] = useSearchParams()
const [colorValues, setColorValues] = useState(
  searchParams.getAll('color') || []);
 const colorHandler = (values) => {
  console.log("VALUE",values)
  setColorValues(values)
}

    useEffect(() => {
      let params;
      if(colorValues) {
        setSearchParams({'color':colorValues}, { replace: true })
        params={
          "color":searchParams.getAll('color'),
         }
      dispatch(getShirtData(params));
     } 
    },[dispatch.shirts?.length]);
    console.log("shirt",shirts)

    useEffect(()=>{
    setdata(shirts)
    },[shirts?.length])
 
    return (
    <> 
     

   <Container  > 
   <h1 className='shirtheading'>SHIRTS</h1>
      <h2 className='shirtsubtitle'> features shirts from urbantouch. Choose the best outfit from a wide range  <br/> of collection.</h2>
      <Row className='mt-5'>
        <Col xs={12} md={4} lg={3} className="filter-col">
        <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" defaultValue={colorValues} onChange={colorHandler} >
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body  >
          <Form>
            <FormCheck
            type='checkbox'
            value='dark blue'
            label="Dark Blue"
            
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            value='black'
            label="black"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="green"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="light brown"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="blue"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="navy"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="maroon"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="wine"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="white"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="brown"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="yellow"
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
           
            label="1399"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
          
            label="1599"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="1699"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="1799"
            />
          </Form>
       </Accordion.Body>
       </Accordion.Item>   
       </Accordion>
     
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Style</Accordion.Header>
        <Accordion.Body>
          <Form>
            <FormCheck
            type='checkbox'
            label="check shirt"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="solid shirt"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="strips shirt"
            />
          </Form>
          <Form>
            <FormCheck
            type='checkbox'
            label="floral shirt"
            />
          </Form>
       </Accordion.Body>
       </Accordion.Item>   
       </Accordion>
        </Col>
        <Col xs={12} md={8} lg={9} className="product-col">
        <Row className="product-row">
   
      {
        shirts.map((shirt,index)=>{
          // console.log("shirts",shirt)
            return(
              <Col   xs={12} md={6}  lg={3}   className="product-card" style={{marginLeft:"50px"}} key={shirt.id}> 
              <Card style={{ width: '14rem',height:"400px"}}>  
                <div className='shirt-div' onClick={handelClick}> 
                <div> 
                  {clicked ? (
                   <AiOutlineHeart className='heart'   />
                      ) : (
                    <AiFillHeart className='heart'   />
                      )}
                </div> 
                <NavLink to={`/${"shirt"}/${shirt._id}`}>
                <Card.Img variant="top" src={shirt.image} alt="img" className='shirtimg'/>
                </NavLink>
                </div> 
                <Card.Title style={{fontSize:15,height:"40px",padding:"10px"}}>{shirt.title}</Card.Title>
                <Col className='p-2 d-flex justify-content-between '>   
                <Card.Text  className='shirttext'> <BiRupee/>{shirt.price}</Card.Text>

                </Col>
                </Card>
                </Col>
            )
        })
      }

      </Row>
      </Col>
      </Row>
    
   

<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{data?.length}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
  </Container> 
    </>
  )
}


 
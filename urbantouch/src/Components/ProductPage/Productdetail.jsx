import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {GrAdd} from 'react-icons/gr'
import {GrSubtract} from 'react-icons/gr'
import "../ProductPage/Productdetail.css"
import { useDispatch, useSelector } from 'react-redux'
import { getShirtData } from '../../Redux/Shirt/action';
import axios from 'axios';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Container, Row, Col, Image, Button,InputGroup,FormControl, Form } from 'react-bootstrap';
import {addProductCart, getProduct} from "../../Redux/Cart/action"
export default function Productdetail({product}) {

    const navigate=useNavigate()
  const [count,setcount] = useState(0)
  const [quantity, setQuantity] = useState(1); // Initial quantity value

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // const [data, setData]= useState([]); 
//  const cart=useSelector((store)=>store.cartreducer.cart)
 
  
  //console.log("prod",cart)
  const dispatch = useDispatch();
  const handleadd= ()=>{
    setcount(count+1)
  }
  const handlesub= ()=>{
  if(count <= 0){
    return
  }
  setcount(count-1)
  }

  const {id,end}=useParams();
  console.log("id",id,"end",end)
       
    const [current, setCurrent]=useState({});
    //console.log("curr",cart) 
    useEffect(()=>{
      axios.get(`https://nice-blue-zebra-hose.cyclic.app/api/${end}/${id}`).then(res=>{
      setCurrent(res.data)
      console.log("data",res.data)
    })
      .catch(err=>{
      console.log(err)
    })
    } ,[])

        const  addToCartHandeler = () => {
          current && dispatch(addProductCart(current._id))
          console.log("current",current._id)
        
        }

    
  
  // const addToCartHandler = async () => {
  //   try {
  //     await dispatch(addProductCart(current));
  //     navigate("/yourcart");
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }
  // };

  return (
    <Container className='prodcontainer'>
    <Row className='procontent'>
      <Col md={6} xs={12} className='proimg'>
        <Image src={current.image} alt="Product Image" fluid />
      </Col>
      <Col md={6} xs={12} className='protext'>
        <h6>URBANTOUCH</h6>
        <h1>{current.title}</h1>
        <p>{current.price}</p>
        <p>Tax included.</p>
        <p>Size</p>
        <div className='allbuttons'>
          <Button variant="light">S</Button>
          <Button variant="light">M</Button>
          <Button variant="light">L</Button>
          <Button variant="light">XL</Button>
        </div>
      <h2 className='qunt'>Quanity</h2>
      <InputGroup className=" quantitybox ">
      <Button variant="outline-dark"  className='quntbtnleft' onClick={handleDecrement}>
        <FaMinus />
      </Button>
      <FormControl  type="text" className="quntform" value={quantity} readOnly />
      <Button variant="outline-dark" className='quntbtnright' onClick={handleIncrement}>
        <FaPlus />
      </Button>
    </InputGroup>
        {/* <p>Quantity</p>
        <div className='quantitybox'>
          <Button variant="light" >-</Button>
          <h2>{count}</h2>
          <Button variant="light"  >+</Button>
        </div> */}
        <Button variant="outline-dark " className='addproduct' onClick={addToCartHandeler} >Add to cart</Button>
        <br />
        <Button variant="dark outline-dark" className='buyproduct'>Buy it now</Button>
      </Col>
    </Row>
  </Container>
  )
 }














































// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import {GrAdd} from 'react-icons/gr'
// import {GrSubtract} from 'react-icons/gr'
// import "../ProductPage/Productdetail.css"
// import { useDispatch, useSelector } from 'react-redux'
// import { getMensData} from '../../Redux/Newarrival/action';
// import { getShirtData } from '../../Redux/Shirt/action';
// import { getTShirtData } from '../../Redux/T-shirt/action';
// import { getTrouserData  } from '../../Redux/Trouser/action';
// import { getDenimsData } from '../../Redux/Denims/action';
// import {  getShortsData } from '../../Redux/Shorts/actions';
// import {  getSweaterData} from '../../Redux/Sweaters/action';

// import axios from 'axios';

// export default function Productdetail({product}) {
//   const [count,setcount] = useState(0)
//   // const [data, setData]= useState([]); 
//   const cart=useSelector(store=>store.cartreducer.cart)
//   const dispatch = useDispatch();
  

// const handleadd= ()=>{
 
//   setcount(count+1)

//   }
// const handlesub= ()=>{
// if(count <= 0){
//     return
// }
// setcount(count-1)
// }

  
//   useEffect(()=>{
//     dispatch(getMensData())
//     dispatch(getShirtData())
//     dispatch(getTShirtData())
//     dispatch(getTrouserData())
//     dispatch(getDenimsData ())
//     dispatch(getShortsData())
//     dispatch(getSweaterData())

//   },[])

//   const {id,end}=useParams();
//   console.log("id",id)
       
//         const [cart, setcart]=useState({});
//         console.log(cart)
//         // const products=useSelector(store=>store.newarrivalreducer.products);
//         // const  shirts = useSelector( store =>  store.shirtreducer.shirts);

//         useEffect(()=>{
//    axios.get(`http://localhost:8080/${end}/${id} `).then(res=>{
//       setcart(res.data)
//     }
//     )
//     .catch(err=>{
//       console.log(err)
//     }
//     )
//         },[])

//         ///shirt//
//   //       useEffect(()=>{
//   //        if(  shirts.length===0){
//   //          dispatch(getShirtData());
//   //        }
//   //       },[dispatch.shirts?.length]);
//   //       console.log("shirts ", shirts )
               
//   //       useEffect(()=>{
//   //           if(id){
               
//   //             console.log("pdt", products)
//   //               const  temp=products.find(
//   //                 (product)=>product.id===Number(id));
//   //           temp &&  setcart(temp ) ;

//   //           console.log("cart",temp)
//   //           }
//   //       },[id,products])
   
//   // console.log(product)

//   return (
//     <div className='prodcontainer'>
//       <div className='procontent'> 
//       <div className='prodimg' >
//         <img src={cart.image} alt="img"/>
//       </div>
//       <div className='protext'>
//         <p>URBANTOUCH</p>
//         <p>{cart.title}</p>
//         <p>{cart.price}</p>
//         <p>Tax included.</p>
//         <p>Size</p>
//         <div className='allbuttons'>
//             <button>S</button>
//             <button>M</button>
//             <button>L</button>
//             <button>XL</button>
             

//         </div>
//         {/* <p>Color</p>
//         <div>
//             <button>Green</button>
//         </div> */}

//         <p>Quantity</p>
//         <div className='quantitybox'>
 
//             <button  onClick={ handlesub} ><GrSubtract/></button>
//             <h2>{count}</h2>
//             <button  onClick={ handleadd} ><GrAdd/></button>
           

//       </div >

//       <button className='addproduct'>Add to cart</button>
//       <br/>
//       <button className='buyproduct'> Buy it now</button>
//     </div>

//     </div>
    
//     </div>
//   )
// }

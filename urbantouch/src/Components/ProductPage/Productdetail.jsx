import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {GrAdd} from 'react-icons/gr'
import {GrSubtract} from 'react-icons/gr'
import "../ProductPage/Productdetail.css"
import { useDispatch, useSelector } from 'react-redux'
import {  getMensData} from '../../Redux/Newarrival/action';
import { getShirtData } from '../../Redux/Shirt/action';
import { getTShirtData } from '../../Redux/T-shirt/action';
import { getTrouserData  } from '../../Redux/Trouser/action';
import { getDenimsData } from '../../Redux/Denims/action';
import {  getShortsData } from '../../Redux/Shorts/actions';
import { getSweaterData } from '../../Redux/Sweaters/action';

import axios from 'axios';

export default function Productdetail({product}) {
  const [count,setcount] = useState(0)
  // const [data, setData]= useState([]); 
  const cart=useSelector(store=>store.cartreducer.cart)
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

  
  useEffect(()=>{
    dispatch(getMensData())
    dispatch(getShirtData())
    dispatch(getTShirtData())
    dispatch(getTrouserData())
    dispatch(getDenimsData ())
    dispatch(getShortsData())
    dispatch(getSweaterData())

  },[])

  const {id,end}=useParams();
  console.log("id",id)
       
        const [current, setCurrent]=useState({});
        console.log(current)
        // const products=useSelector(store=>store.newarrivalreducer.products);
        // const  shirts = useSelector( store =>  store.shirtreducer.shirts);

        useEffect(()=>{
   axios.get(`http://localhost:8080/${end}/${id} `).then(res=>{
      setCurrent(res.data)
    }
    )
    .catch(err=>{
      console.log(err)
    }
    )
        },[])

        ///shirt//
  //       useEffect(()=>{
  //        if(  shirts.length===0){
  //          dispatch(getShirtData());
  //        }
  //       },[dispatch.shirts?.length]);
  //       console.log("shirts ", shirts )
               
  //       useEffect(()=>{
  //           if(id){
               
  //             console.log("pdt", products)
  //               const  temp=products.find(
  //                 (product)=>product.id===Number(id));
  //           temp &&  setCurrent(temp ) ;

  //           console.log("current",temp)
  //           }
  //       },[id,products])
   
  // console.log(product)

  return (
    <div className='prodcontainer'>
      <div className='procontent'> 
      <div className='prodimg' >
        <img src={current.image} alt="img"/>
      </div>
      <div className='protext'>
        <p>URBANTOUCH</p>
        <p>{current.title}</p>
        <p>{current.price}</p>
        <p>Tax included.</p>
        <p>Size</p>
        <div className='allbuttons'>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
             

        </div>
        {/* <p>Color</p>
        <div>
            <button>Green</button>
        </div> */}

        <p>Quantity</p>
        <div className='quantitybox'>
 
            <button  onClick={ handlesub} ><GrSubtract/></button>
            <h2>{count}</h2>
            <button  onClick={ handleadd} ><GrAdd/></button>
           

      </div >

      <button className='addproduct'>Add to cart</button>
      <br/>
      <button className='buyproduct'> Buy it now</button>
    </div>

    </div>
    
    </div>
  )
}

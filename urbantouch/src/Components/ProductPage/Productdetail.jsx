import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  getMensData} from '../../Redux/Newarrival/action';


export default function Productdetail({product}) {
  const {id}=useParams();
  console.log("id",id)
        const dispatch=useDispatch();
        const [current, setCurrent]=useState({});
        const products=useSelector(store=>store.newarrivalreducer.products);

        useEffect(()=>{
         if(products.length===0){
           dispatch(getMensData());
         }
        },[dispatch.products?.length]);
        console.log("prop",products)
               
        useEffect(()=>{
            if(id){
                const  temp=products.find(product=>product.id===id);
            temp    &&  setCurrent(temp ) ;

            }
        },[id,products])
        console.log("current",current)
  console.log(product)

  return (
    <div className='prodcontainer'>
      <div></div>
      <div>
        <p>URBANTOUCH</p>
        <h4>LT Green Checkerd Shirt</h4>
        <p>Regular priceRs. 1,699.00</p>
        <p>Tax included.</p>
        <p>Size</p>
        <div>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
             

        </div>
        <p>Color</p>
        <div>
            <button>Green</button>
        </div>

        <p>Quantity</p>
        <div>
            <button>1</button>

      </div>

      <button>Add to cart</button>
      <button> Buy it now</button>
    </div>
    </div>
  )
}

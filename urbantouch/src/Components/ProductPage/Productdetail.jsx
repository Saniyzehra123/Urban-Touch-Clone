import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  getMensData} from '../../Redux/Newarrival/action';
import { getShirtData } from '../../Redux/Shirt/action';

export default function Productdetail({product}) {
  const [count,setcount] = useState(0)
const handleadd= ()=>{
 
  setcount(count+1)

  }
const handlesub= ()=>{
if(count <= 0){
    return
}
setcount(count-1)
}


  const {id}=useParams();
  console.log("id",id)
        const dispatch=useDispatch();
        const [current, setCurrent]=useState({});
        const products=useSelector(store=>store.newarrivalreducer.products);
        const  shirts = useSelector( store =>  store.shirtreducer.shirts);

        useEffect(()=>{
         if(products.length===0){
           dispatch(getMensData());
         }
        },[dispatch.products?.length]);
        console.log("prop",products)

        ///shirt//
        useEffect(()=>{
         if(  shirts.length===0){
           dispatch(getShirtData());
         }
        },[dispatch.shirts?.length]);
        console.log("shirts ", shirts )
               
        useEffect(()=>{
            if(id){
               
              console.log("pdt", products)
                const  temp=products.find(
                  (product)=>product.id===Number(id));
            temp &&  setCurrent(temp ) ;

            console.log("current",temp)
            }
        },[id,products])
   
  console.log(product)

  return (
    <div className='prodcontainer'>
      <div></div>
      <div>
        <p>URBANTOUCH</p>
        <h4>{current.title}</h4>
        <p>{current.price}</p>
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
            <button  onClick={ handleadd} >add</button>
            <h2>{count}</h2>
            <button  onClick={ handlesub} >sub</button>

      </div>

      <button>Add to cart</button>
      <button> Buy it now</button>
    </div>
    </div>
  )
}

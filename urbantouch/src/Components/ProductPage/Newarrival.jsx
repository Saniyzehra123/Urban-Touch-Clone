import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import {  getMensData} from '../../Redux/Newarrival/action';
import  "../ProductPage/Newarrival.css";
import Productdetail from './Productdetail';

export default function Newarrival() {
    const [data,setdata] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector( store =>  store.newarrivalreducer.products);
 
    // const {loading,error} = useSelector( store =>  store.newarrival);

    useEffect(() => {
        dispatch(getMensData());
    },[dispatch.products?.length]);
    console.log("prop",products)
  return (
    <div>
      
    <h1 className='heading'>NEW ARRIVALS</h1>
    <div className='newarrivalcontain'> 

    
           {
                products.map((product,index)=>{
                    return(
                        <div key={index}>
                        
                                <NavLink to={`/newarrival/${product.id}`}>
                                <img src={product.image} alt=""/>
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                                </NavLink>
                        
                       
                        
                        
                        </div>
                    )
                })
              }
      

    
    </div>
    
    </div>
  )}
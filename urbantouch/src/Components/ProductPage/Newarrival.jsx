import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {  getMensData} from '../../Redux/Newarrival/action';


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
        
        </div>

  )}
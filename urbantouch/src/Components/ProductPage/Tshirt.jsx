import React from 'react'
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
 
import { getTShirt } from '../../Redux/T-shirt/action';


export default function Tshirt() {
    const [data,setdata] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
      const  tshirts = useSelector( store =>  store.Tshirtreducer.tshirts);
  
 //     // const {loading,error} = useSelector( store =>  store.newarrival);
 
   useEffect(() => {
      dispatch(getTShirt());
  },[dispatch.tshirts?.length]);
   console.log("shirt",tshirts)
return (
 <div>
   
 </div>
)
  return (
    <div>
      
    </div>
  )
}

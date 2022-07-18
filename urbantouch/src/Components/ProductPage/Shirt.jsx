import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getShirtData } from '../../Redux/Shirt/action';

export default function Shirt() {

    const [data,setdata] = useState([]);

       const dispatch = useDispatch();
       const navigate = useNavigate();
         const  shirts = useSelector( store =>  store.shirtreducer.shirts);
     
    //     // const {loading,error} = useSelector( store =>  store.newarrival);
    
      useEffect(() => {
         dispatch(getShirtData());
     },[dispatch.shirts?.length]);
      console.log("shirt",shirts)
  return (
    <div>
      
    </div>
  )
}



// export default function Newarrival() {
//     const [data,setdata] = useState([]);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const products = useSelector( store =>  store.newarrivalreducer.products);
 
//     // const {loading,error} = useSelector( store =>  store.newarrival);

//     useEffect(() => {
//         dispatch(getMensData());
//     },[dispatch.products?.length]);
//     console.log("prop",products)
//   return (
//     <div>
        
//         </div>

//   )}
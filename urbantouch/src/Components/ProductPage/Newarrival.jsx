import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import {  getMensData,getNewArrival,getMensFilterData} from '../../Redux/Newarrival/action';
import  "../ProductPage/Newarrival.css";
import Pagination from './Pagination';
import Productdetail from './Productdetail';
import { Select } from '@chakra-ui/react'

export default function Newarrival() {
    // const [data,setdata] = useState([]);
    // const [page,setpage] = useState(1);
    // const [currentPage,setcurrentPage] = useState(4);
    const [data,setdata] = useState([]);
    
    const [currentPage,setcurrentPage] = useState(1);
      const [page,setpage] = useState(4);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector( store =>  store.newarrivalreducer.products);
 
    // const {loading,error} = useSelector( store =>  store.newarrival);

    useEffect(() => {
        dispatch(getMensData());
    },[dispatch.products?.length]);
    console.log("prop",products)
 


// const  indexOfLastPost = currentPage *  currentPage ;
// const  indexOfFirstPost =  indexOfLastPost -  currentPage;
// const  currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
const  indexOfLastPost = currentPage *  page  ;
const  indexOfFirstPost =  indexOfLastPost -   page;
const  currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

console.log("raj",products.length)

const paginate = (currentPosts ) => {
    setcurrentPage(currentPosts );
    console.log("perpage",currentPosts )
}
  return (
    <div>
      
    <h1 className='heading'>  NEW ARRIVALS</h1>

    <div >
      <div className="filter"  >
        <div className="filter-price">
          <h3>Filter by price</h3>
          <div className="filter-price-btn">
            <button
              
              className="filter-price-btn-1"
            >
              High to low
            </button>
            <button

              
            
              className="filter-price-btn-2"
            >
              Low to high
            </button>
              

               </div>
           </div>
        </div>


{/* 
        //select */}

<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
    </div>
    <div className='newarrivalcontain'> 

    
           {
                products.map((product,index)=>{
                    return(
                        <div key={index}>
                        
                                <NavLink to={`/${"newarrival"}/${product.id}`}>
                                <img src={product.image} alt="" className='newimg'/>
                                
                                </NavLink>
                        
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                        
                        
                        </div>
                    )
                })
              }
 
   
    
    </div>

    <Pagination page={page} totalPosts={products.length} paginate={paginate}/>
    {/* <Pagination currentpage={currentPosts} totalPosts={products.length}/> */}
    
    </div>
  )}
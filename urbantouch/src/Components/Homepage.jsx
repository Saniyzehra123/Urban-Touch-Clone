import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import {GrPlayFill} from 'react-icons/gr'
import "./Homepage.css"
import axios from 'axios'
import {Link} from "react-router-dom";
import { Carousel, CarouselItem } from 'react-bootstrap'
 

export default function Homepage() {

 const [video,setvideo]= useState("false")
 const [home,sethome]= useState([]);
 const [play,setplay]= useState(true);

 useEffect(()=>{
  axios.get("http://localhost:8080/home").then(res=>{
    sethome(res.data)
  }
  ).catch(err=>{
    console.log(err)
  })
  },[])
  const handleplay=()=>{
    setplay(true)
    setvideo(!video)
    
  }
   
  return (
    <div>

    <div className='bannercontainer'>  

     {/* <div className='urbanpic'>
      <img  width="100%" height="700px"    
      src="https://cdn.shopify.com/s/files/1/2381/1785/files/web_banner.jpg?v=1654243325&width=1500" alt="" />
    
     </div>  */}
     <Carousel  data-bs-theme="dark" className='carousel'>

      <CarouselItem  className='urbanpic'>
      <img  width="100%" height="700px"    
       src="https://cdn.shopify.com/s/files/1/2381/1785/files/web_banner.jpg?v=1654243325&width=1500" alt="" />
      </CarouselItem>
      
      <CarouselItem className='urbanpic'>
      <img  width="100%" height="700px"    
       src="https://www.urbantouch.in/cdn/shop/files/web_banner_2.jpg?v=1679114780&width=1500ac" alt="" />
      </CarouselItem>

      <CarouselItem className='urbanpic'>
      <img  width="100%" height="700px"    
       src="https://www.urbantouch.in/cdn/shop/files/web_banner_1.jpg?v=1679114894&width=2000" alt="" />
      </CarouselItem>

     </Carousel>
    
     {/* <div className="imgtext">
       <p>URBAN EXPLORERS</p> 
       <button>Shop all</button>

    </div> */}
    </div>
    <h2 className='featuretitle'>Featured products</h2>
      
      <div className='feature'>
      {
        home.map((item)=>{
          return(
            
              <div className="prodimgs">
                  <Link to= "/newarrival">  <img  src={item.image} alt="img"  className="fecimg" /> </Link>  
                <img src={item.image2} alt="img" className='flip'/>  
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
           
          )
        }

        )
      }
      </div>
      <div className='casualcontainer'>  

    <div className="moreh">
    <p   >What's More Casual</p>
    </div>
    
    <div className='more'>
      
      <div className='moreleft'>
        <img  width="123%"   height="80%" 
        src='https://cdn.shopify.com/s/files/1/2381/1785/collections/TSHIRTS.jpg?v=1647584051&width=750' alt='' />
     <p className='tshirtname'>T SHIRT</p>
      </div>
      <div className='moreright'>

        
        <div className='card'> 
      
    	<img 
      width="100% " height="480px"
        src=" https://cdn.shopify.com/s/files/1/2381/1785/products/LROCFCTS0032.jpg?v=1592293218&width=823" alt="Card Back"/>
       
        <img src=" https://cdn.shopify.com/s/files/1/2381/1785/products/LROCFCTS0032_1.jpg?v=1592293218&width=823" class="img-top" alt="Card Front"/>
     
        {/* <img width="80%" height="480px"  
        src=" https://cdn.shopify.com/s/files/1/2381/1785/products/LROCFCTS0032.jpg?v=1592293218&width=823" alt="" /> */}
      </div>
     {/* <img  className="img-top" src="https://cdn.shopify.com/s/files/1/2381/1785/products/LROCFCTS0032_1.jpg?v=1592293218&width=823" alt="" /> */}
     <p>
     Charcoal Grey Chest Printed T-Shirt </p>
   <p>Rs. 599.00</p>
  
  <div className='grey'>
  <img width="60%"   
    src="https://cdn.shopify.com/s/files/1/2381/1785/collections/DENIMS.jpg?v=1600681160&width=750" alt="" />
  </div>
      

    <p className='denimsname'>DENIMS</p>
      </div>
    </div>
    </div>
    <div  className='video'  onClick={handleplay }>
     
     {video?  <img src="https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch_1_96b59a43-e1df-4631-8ef2-3e04198c1e3d.jpg?v=1519987513&width=1500" alt="" /> : <ReactPlayer controls url='https://youtu.be/ywX9rSu38wc' width='100%' height='100%' /> }
     
     
     <div> 
      <div className='iconplay'> 
      <GrPlayFill />
     
      </div>
      </div>

    </div>
    
    </div>
  )
}

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import "./Homepage.css"



export default function Homepage() {

 const [video,setvideo]= useState("false")
  return (
    <div>
      
     <div>
      <img  width="100%" height="700px"
      src="https://cdn.shopify.com/s/files/1/2381/1785/files/web_banner.jpg?v=1654243325&width=1500" alt="" />
    
    
    </div>
     <div className="imgtext">
       <p>URBAN EXPLORERS</p> 
       <button>SHOP</button>

    </div>

    <div className='more'>
      <div className='moreleft'>
        <img  width="123%"   height="80%" 
        src='https://cdn.shopify.com/s/files/1/2381/1785/collections/TSHIRTS.jpg?v=1647584051&width=750' alt='' />
     <p>T SHIRT</p>
      </div>
      <div className='moreright'>
        <img width="60%" height="480px"  
        src=" https://cdn.shopify.com/s/files/1/2381/1785/products/LROCFCTS0032.jpg?v=1592293218&width=823" alt="" />
     
     <p>
     Charcoal Grey Chest Printed T-Shirt </p>
   <p>Rs. 599.00</p>

   <img width="60%"   
    src="https://cdn.shopify.com/s/files/1/2381/1785/collections/DENIMS.jpg?v=1600681160&width=750" alt="" />

    <p>DENIMS</p>
      </div>
    </div>

    
    {/* <iframe src=" https://youtu.be/ywX9rSu38wc" title="W3Schools Free Online Web Tutorials"> */}

 
    <div  className='video'   onClick={()=> setvideo(!video)}>
     
     {video?  <img src="https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch_1_96b59a43-e1df-4631-8ef2-3e04198c1e3d.jpg?v=1519987513&width=1500" alt="" /> : <ReactPlayer controls url='https://youtu.be/ywX9rSu38wc' width='100%' height='100%' /> }
     
     
      
    </div>
     {/* </iframe> */}
  
     
    </div>
  )
}

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {GrPlayFill} from 'react-icons/gr'
import "./Homepage.css"



export default function Homepage() {

 const [video,setvideo]= useState("false")
  return (
    <div>
      
     <div className='urbanpic'>
      <img  width="100%" height="700px"  
      src="https://cdn.shopify.com/s/files/1/2381/1785/files/web_banner.jpg?v=1654243325&width=1500" alt="" />
    
    
    </div>
     <div className="imgtext">
       <p>URBAN EXPLORERS</p> 
       <button>Shop all</button>

    </div>

    <h2>Featured products</h2>
    <div>
      
    </div>
    <h2 className="moreh" >What's More Casual</h2>
    <div className='more'>
      
      <div className='moreleft'>
        <img  width="123%"   height="80%" 
        src='https://cdn.shopify.com/s/files/1/2381/1785/collections/TSHIRTS.jpg?v=1647584051&width=750' alt='' />
     <p>T SHIRT</p>
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

   <img width="60%"   
    src="https://cdn.shopify.com/s/files/1/2381/1785/collections/DENIMS.jpg?v=1600681160&width=750" alt="" />

    <p>DENIMS</p>
      </div>
    </div>

    
    {/* <iframe src=" https://youtu.be/ywX9rSu38wc" title="W3Schools Free Online Web Tutorials"> */}

 
    <div  className='video'   onClick={()=> setvideo(!video)}>
     
     {video?  <img src="https://cdn.shopify.com/s/files/1/2381/1785/files/urbantouch_1_96b59a43-e1df-4631-8ef2-3e04198c1e3d.jpg?v=1519987513&width=1500" alt="" /> : <ReactPlayer controls url='https://youtu.be/ywX9rSu38wc' width='100%' height='100%' /> }
     
     
      <div className='iconplay'> 
      <GrPlayFill/>
      {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAYFBMVEX///8AAACHh4d3d3fJyckFBQXd3d3AwMD6+vp/f3+xsbFFRUXn5+eXl5e9vb1SUlLPz8/w8PClpaUYGBhnZ2c/Pz9ubm6enp4sLCzW1tYcHBw5OTlaWlqQkJBLS0sSEhJc+MawAAABRElEQVR4nO2ZbW7CQAwFedBAaQu0BOgncP9bsr8LSTbSekeINycYRS+2155MjDHGGGOMMcYYY0whFs+0wVIvsMFUen2iDaTZG20grXADaY0baPNOG6Q4fNAGara0gdTWj8M/A+nvmzZQM60bh2uD5FC1UN8ykL4WtIG0q1aouwzUHCv17U4D6VwnDj0G0r5G3+41kA7xcRgwUPMZHYchg/RnBhfqYYM0xoUW6hyD2DEuz0A/27A4ZBpIv1GFOtsgjXFz2iCob48xSH9mwBg3ziDFoXihHmuQ+nbhOIw3UFu2QN3fN9gXf1nd17+A1wO6JtJ9Ae+N9Hxwgmckek4807My/V6g30z0uxF/O9P7g7ASnGlQKQCdBvgujd4n0jtVfK9M79bx+wJ9Y6HvTPStDb438jdX/u5sjDHGGGOMMcYY89BcANyuDVPTN21KAAAAAElFTkSuQmCC" alt="" /> */}
      </div>
    </div>
     {/* </iframe> */}
  
     
    </div>
  )
}

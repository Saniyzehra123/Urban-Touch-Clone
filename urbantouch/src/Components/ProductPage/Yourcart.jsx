import React from 'react'
import "../ProductPage/Yourcart.css"
import {GrAdd} from 'react-icons/gr'
import {GrSubtract} from 'react-icons/gr'
import {RiDeleteBinLine} from 'react-icons/ri'

export default function Yourcart() {
  return (
    <div className='your'> 
    <div className='yourcontainer'>
        <div className='yorname'> 
        <p>Your cart</p>
        <p>Continue shopping</p>
        </div>
      <div className='yourtext'>
       <p>PRODUCT</p>
       <p>QUANTITY</p>
       <p>TOTAL</p>
      </div>
      <hr/>

      <div>
        <div className='yourimg'>
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
           <div>
           <p>gff</p>
           <p>RS:1388</p>
           <p>Size:</p>
           </div>
           <div className='yourquant'>
            <div>
                <p>quant</p>
                <div className='delete'> 
           < RiDeleteBinLine/>
           </div>
      </div>
      </div>

       
      <div className='yourtotal'>
        <p>total</p>
      </div>
      </div>  
  
      </div>
      

      <hr/>
      <div className='subtotals'>
     <div> 
         <p className='subtotalsprice'>Subtotal</p>
         <p  className='subtotalsprices' >Rs. 3,098.00</p>
         </div>
         <div className='subtax'> 
         <p>Tax included and shipping calculated at checkout</p>
         </div>
         <br/>
         <div> 
     <button className='subcheck'>Check out</button>
     </div>
      </div>
    </div>
     
    </div>
  )
}

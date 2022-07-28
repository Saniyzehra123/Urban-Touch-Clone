import React from 'react'
import "./pagination.css";

export default function Pagination({page,totalPosts, paginate}) {


    const perpageno=[]
    for(let i=1;i<=Math.ceil(totalPosts/page);i++){
        perpageno.push(i)
    }
    console.log("perpageno",perpageno)
  return (
    <div className='pagi'>
    <ul className='page'>
        {perpageno.map((e)=>(
            <div className='nos'><a onClick={()=> paginate(e)} href="!#">{e}</a></div>
       ))} 
    </ul>

    </div>
  )
}

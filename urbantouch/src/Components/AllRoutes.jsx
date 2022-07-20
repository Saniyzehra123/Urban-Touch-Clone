import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Homepage from './Homepage'
 
import Login from './Login'
import Navbar from './Navbar'
import Denims from './ProductPage/Denims'
import Newarrival from './ProductPage/Newarrival'
import Productdetail from './ProductPage/Productdetail'
import Shirt from './ProductPage/Shirt'
import Shorts from './ProductPage/Shorts'
import Sweater from './ProductPage/Sweater'
import Trouser from './ProductPage/Trouser'
import Tshirt from './ProductPage/Tshirt'

export default function AllRoutes() {
  return (
    <div>
       <div>
        <Navbar />
        </div>
        <Routes> 
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/newarrival" element={<Newarrival/>} />
        <Route path="/shirt" element={<Shirt/>} />
        <Route path="/tshirt" element={<Tshirt/>} />
        <Route path="/trouser" element={<Trouser/>} />
        <Route path="/denims" element={<Denims/>} />
        <Route path="/shorts" element={<Shorts/>} />
        <Route path="/sweater" element={<Sweater/>} />
        {/* <Route path="/productdetails" element={<Productdetail/>} /> */}
        <Route path="/newarrival/:id" element={<Productdetail/>} />
        
        <Route path="/blog" element={<Blog/>} />

      </Routes>
    </div>
  )
}

 
 
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Homepage from './Homepage'
 
import Login from './Login'
import Navbar from './Navbar'
import Newarrival from './ProductPage/Newarrival'
import Shirt from './ProductPage/Shirt'
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
        <Route path="/blog" element={<Blog/>} />

      </Routes>
    </div>
  )
}

 
 
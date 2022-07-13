import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
 
import Login from './Login'
import Navbar from './Navbar'

export default function AllRoutes() {
  return (
    <div>
       <div>
        <Navbar />
        </div>
        <Routes> 
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

 
 
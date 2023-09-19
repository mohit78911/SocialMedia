import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom";
import UserBook from './userBook';
import 

export default function SocialMedia() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login userData={userData} />} />
        <Route path='/home' element={<UserBook/>}/> 
      </Routes>
    </div>
  )
}

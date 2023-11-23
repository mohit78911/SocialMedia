import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UiLogin from './UiLogin'

export default function UIMainComp() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UiLogin/>}/>
        <Route path='Ui' element="" 
      </Routes>
    </div>
  )
}

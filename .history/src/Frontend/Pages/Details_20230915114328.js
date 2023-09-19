import React from 'react'
import "./Details.css"
import { Button } from '@mui/material'

export default function Details() {
  return (
    <div>
      <div className="Account">
        <span className='accountTitle'>Account</span>
        <div className="buttons-container">
        <Button className="buttons"  s>Settings</Button>
        <Button className="buttons">Analytics</Button>
        <Button className="buttons">Chat</Button></div>
      </div>
    </div>
  )
}

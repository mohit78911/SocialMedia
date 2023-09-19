import React from 'react'
import "./Details.css"
import { Button } from '@mui/material'

export default function Details() {
  return (
    <div>
      <div className="Account">
        <span className='accountTitle'>Account</span>
        <div className="buttons-container">
        <Button className="buttons">Settings</Button>
        <Button className="buttons">Analytics</Button>
        <Button>Chat</Button></div>
      </div>
    </div>
  )
}

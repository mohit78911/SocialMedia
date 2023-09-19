import React from 'react'
import "./Details.css"
import { Button } from '@mui/material'

export default function Details() {
  return (
    <div>
      <div className="Account">
        <span style={{textAlign:"left"}}>Account</span>
        <Button>Settings</Button><br/>
        <Button>Analytics</Button>
        <Button>Chat</Button>
      </div>
    </div>
  )
}

import React from 'react'
import "./Details.css"
import { Button } from '@mui/material'

export default function Details() {
  return (
    <div>
      <div className="Account">
        <span style>Account</span>
        <Button>Settings</Button><br/>
        <Button>Analytics</Button><br/>
        <Button>Chat</Button>
      </div>
    </div>
  )
}

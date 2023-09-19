import React from 'react'
import "./Details.css"
import { Button } from '@mui/material'

export default function Details() {
  return (
    <div>
      <div className="Account">
        <Button>Settings</Button>
        <Button>Analytics</Button>
        <Button>Chat</Button>
      </div>
    </div>
  )
}

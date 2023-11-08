import axios from 'axios'
import React from 'react'

export default function FriendsList() {

    const getFriendsList = ()=>{
        axios.get("http://localhost:6600/friendslist/friend")
    }
  return (
    <div>
      hello dosto 
    </div>
  )
}

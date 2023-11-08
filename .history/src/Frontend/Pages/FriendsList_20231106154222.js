import axios from 'axios'
import React from 'react'

export default function FriendsList() {\
    c

    const getFriendsList = ()=>{
        axios.get("http://localhost:6600/friendslist/friend")
        .then((result)=>{
            console.log(result.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
      hello dosto 
    </div>
  )
}

import React from 'react'
import "./Activity.css"

export default function Activity({userData}) {
  return (
    <div>
      <div>{userData.map((value)=>{
        return(
          <div className='activityConta'>

          </div>
        )
      })
        }</div>
    </div>
  )
}

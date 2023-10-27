import React from 'react'
import "./ChatGPT.css"
export default function ChatGPT() {

  return (
    <>
     <div>
      {/* navbar */}
      <nav className='chatgptnav'>
        <div className='centerName'>Default(GPT-3.5)</div>
      </nav>
      {/* search_bar */}
      <div>
        <input className='GptSearchBar'/>
      </div>
      </div>  
    </>
  )
}

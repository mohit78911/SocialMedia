import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div>
      <div className='flex-contain'>
        <div className='oneContain'>
            <img src="https://storage.googleapis.com/pai-images/def5837fff8541f9bf92db053a3eeeec.jpeg" width={"100%"} className="imglogin"/>
        </div>
        <div className='secondContain'>
            <div className='textLogin'>
            <h6>Welcome to SocialMedia! 👋🏻</h6>
            <span>Please sign-in to your account and start the adventure</span></div>
            <div>
                <input placeholder='Email'/>
                <input/>
            </div>
        </div>

      </div>
    </div>
  )
}

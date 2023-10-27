import React from 'react'
import "./ChatGPT.css"
export default function ChatGPT() {
const [searchBar,setSearchBar] = useState('')
  return (
    <>
     <div>
      {/* navbar */}
      <nav className='chatgptnav'>
        <div className='centerName'>Default(GPT-3.5)</div>
      </nav>
      {/* search_bar */}
      <div>
        <input className='GptSearchBar' value={searchBar} onchange />
      </div>
      </div>  
    </>
  )
}

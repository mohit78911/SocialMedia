
import React from 'react'
import "./Feed.css"

export default function Feed() {  
  const [inputData,setInputData] = useState('')
  return (
    <div>
      <div className="postfeed">
        <input value={inputData} onChange={(e)=>setIn} />
      </div>
    </div>
  )
}
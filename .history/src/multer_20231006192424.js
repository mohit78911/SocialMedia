import React, { useState } from 'react'

export default function multer() {
    const [file,setFile] = useState()
    const upload = () => {
        const formData = new FormData()
        formData.append('file', file)
        axios.post('http://localhost:6600/userlogin/',formData )
        .then( res => {})
        .catch(er => console.log(er))
      }
  return (
    <div>
      <form>
        <input type='file' />
      </form>
    </div>
  )
}

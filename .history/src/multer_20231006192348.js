import React, { useState } from 'react'

export default function multer() {
    const [file,setFile] = useState()
  return (
    <div>
      <form>
        <input type='file' />
      </form>
    </div>
  )
}

import React, { useState } from "react";

export default function ProfilePictureUpload() {
const [userDetails,setUserDetails] = useState([])

    const getUserDataFromLocalStorage = ()=>{
        const user = localStorage.getItem('userDetails')
        const detailsParse = JSON.parse(user)
    }
  return (
    <div>
      <div>hello</div>
    </div>
  );
}

import React, { useState } from "react";

export default function ProfilePictureUpload() {
const [userDetails,setUserDetails] = useState([])

    const getUserDataFromLocalStorage = ()=>{
        const user = localStorage.getItem('userDetails')
        const detailsParse = JSON.parse(user)
        if(detailsParse && detailsParse.length){
            setUserDetails(detailsParse)
        }
    }

    use
  return (
    <div>
      <div>hello</div>
    </div>
  );
}

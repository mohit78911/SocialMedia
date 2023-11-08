import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  const getFriendsList = () => {
    axios
      .get("http://localhost:6600/friendslist/friend")
      .then((result) => {
        setFriends(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    
  })
  return <div>hello dosto</div>;
}

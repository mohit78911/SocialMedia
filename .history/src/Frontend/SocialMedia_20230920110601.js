import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import UserBook from "./UserBook";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
// import cookie from "cookie-parser";
// console.log("cookie", cookie);

export default function SocialMedia() {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgpost, setImgpost] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [lastseen, setLastSeen] = useState("");

  const getDataHandler = () => {
    axios
      .get("http://localhost:5500/userdata")
      .then((result) => {
        // console.log(result.data);
        setUserData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataHandler();
  }, []);
  // console.log("userData", userData);

  const postDataHandler = (e) => {
    e.preventDefault();
    let newData = {
      name: name,
      email: email,
      password: password,
      lastseen: lastseen,
      imgpost: imgpost,
      userProfile: userProfile,
    };
    axios
      .post("http://localhost:5500/signup", newData)
      .then((result) => {
        getDataHandler();
        al
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login userData={userData} />} />
        <Route path="/home" element={<UserBook userData={userData} />} />
        <Route
          path="/register"
          element={
            <Registration
              postDataHandler={postDataHandler}
              name={name}
              email={email}
              password={password}
              lastseen={lastseen}
              imgpost={imgpost}
              userProfile={userProfile}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              setLastSeen={setLastSeen}
              setImgpost={setImgpost}
              setUserProfile={setUserProfile}
            />
          }
        />
      </Routes>
    </div>
  );
}

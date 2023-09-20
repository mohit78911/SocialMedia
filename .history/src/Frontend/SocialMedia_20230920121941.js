import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import UserBook from "./UserBook";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { toast, ToastContainer } from "react-toastify";
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

  const nullValueHandler = () => {
    setName("");
    setEmail("");
    setPassword("");
    setLastSeen("");
    setImgpost("");
    setUserProfile("");
  };
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
    if (name.trim() === "") {
      toast.error("please fill name section");
    }else if(email.trim() === ''){
      toast.error('plase fill email')
    }else if(password.trim()===''){
      toast.error("password must require")
    }else if(password.length < 6){
      toast('password must be 8 characters')
    }else if(lastseen.trim() === '') {
      toast.error('please fill lastseen')
    }else if(userProfile.trim() === ''){
      toast.error("Please fill userProfile picture")
    }else if(imgpost.trim() === '')
    else {
      
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
          toast.success("Successfully Added");
          nullValueHandler();
        })
        .catch((error) => {
          console.log(error);
          toast.error('Data can"t added', { position: "top-right" });
        });
    }
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
      <ToastContainer />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserBook from "./UserBook";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { toast, ToastContainer } from "react-toastify";
// import cookie from "cookie-parser";
// console.log("cookie", cookie);

export default function SocialMedia() {
  const [userData, setUserData] = useState([]);
  // ---------------------------InputData------------------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgpost, setImgpost] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [lastseen, setLastSeen] = useState("");
  // ---------------------------InputData------------------------------------
  let [comment, setComment] = useState("");
  

  const nullValueHandler = () => {
    setName("");
    setEmail("");
    setPassword("");
    setLastSeen("");
    setImgpost("");
    setUserProfile("");
    setLike("");
  };

  //get_Login_Details
  const getLoginData = () => {
    axios
      .get("http://localhost:6600/users")
      .then((result) => {
        console.log("originaldata", result.data);
        setLoginData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //useEffect_section
  useEffect(() => {
    getLoginData();
  }, []);
  console.log("loginData", loginData);
  const getDataHandler = () => {
    axios
      .get("http://localhost:5500/userdata")
      .then((result) => {
        console.log("originaldata", result.data);
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
  const location = useNavigate();
  const postDataHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.error("Please Enter NAME");
    } else if (email.trim() === "") {
      toast.error("Please Enter EMAIL");
    } else if (password.trim() === "") {
      toast.error("Password Must Require");
    } else if (password.length < 6) {
      toast("Password Must be in 8 Characters");
    } else if (lastseen.trim() === "") {
      toast.error("Please Enter lastseen");
    } else if (userProfile.trim() === "") {
      toast.error("Please fill userProfile picture");
    } else if (imgpost.trim() === "") {
      toast.error("Please Give any PostPicture");
    } else {
      let newData = {
        name: name,
        email: email,
        password: password,
        lastseen: lastseen,
        imgpost: imgpost,
        userProfile: userProfile,
        like: like,
      };
      axios
        .post("http://localhost:5500/signup", newData)
        .then(() => {
          getDataHandler();
          toast.success("Successfully Added");
          nullValueHandler();
          location("/");
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
        <Route
          path="/home"
          element={
            <UserBook
              userData={userData}
              like={like}
              setlike={setLike}
              likePost={likePost}
            />
          }
        />
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
              like={like}
              setlike={setLike}
              setComment={setComment}
              comment={comment}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

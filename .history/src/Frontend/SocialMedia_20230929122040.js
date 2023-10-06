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
  // const [imgpost, setImgpost] = useState("");
  // const [userProfile, setUserProfile] = useState("");
  // const [lastseen, setLastSeen] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhonenumber] = useState();
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState();

  //  ---------------------------InputData------------------------------------
  let [comment, setComment] = useState("");

  const nullValueHandler = () => {
    setName("");
    setEmail("");
    setPassword("");
    // setLastSeen("");
    // setImgpost("");
    // setUserProfile("");
    setDob("");
    setCity("");
    setPhonenumber("");
    setState("");
    setPincode("");
  };

  //get_Login_Details
  const getLoginData = () => {
    axios
      .get("http://localhost:6600/users")
      .then((result) => {
        console.log("originaldata", result.data);
        setUserData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //useEffect_section
  useEffect(() => {
    getLoginData();
  }, []);
  console.log("loginData", userData);

  // const getDataHandler = () => {
  //   axios
  //     .get("http://localhost:5500/userdata")
  //     .then((result) => {
  //       console.log("originaldata", result.data);
  //       setUserData(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   getDataHandler();
  // }, []);

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
    } else {
      let newData = {
        name: name,
        email: email,
        password: password,
        // lastseen: lastseen,
        // imgpost: imgpost,
        // userProfile: userProfile,
        dob
      };
      axios
        .post("http://localhost:6600/user/post", newData)
        .then(() => {
          // getDataHandler();
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

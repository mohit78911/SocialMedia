import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserBook from "./UserBook";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { toast, ToastContainer } from "react-toastify";
import Errorpage from "./Pages/Errorpage";
import Status from "./Pages/Status";
import ProfilePictureUpload from "./Pages/ProfilePictureUpload";

export default function SocialMedia() {
  const [userData, setUserData] = useState([]);
  // ---------------------------InputData------------------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhonenumber] = useState();
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState();

  //  ---------------------------InputData------------------------------------

  const nullValueHandler = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDob("");
    setCity("");
    setPhonenumber("");
    setState("");
    setPincode("");
  };

  const location = useNavigate();

  //user_registration_Handler
  const postDataHandler = (e) => {
    e.preventDefault();
    const filterEmailData = userData.filter((val) => val.email === email);
    if (name.trim() === "") {
      toast.error("Please Enter NAME");
    } else if (email.trim() === "") {
      toast.error("Please Enter EMAIL");
    } else if (password.trim() === "") {
      toast.error("Password Must Require");
    } else if (password.length < 6) {
      toast("Password Must be in 8 Characters");
    } else if (filterEmailData.length) {
      toast.error("Email Already Exists");
    } else if (dob.trim() === "") {
      toast.error("Please Enter Date Of Birth");
    } else if (city.trim() === "") {
      toast.error("Please Enter City");
    } else if (phonenumber.trim() === "") {
      toast.error("Please Enter Mobile Number");
    } else if (state.trim() === "") {
      toast.error("Please Enter State");
    } else if (pincode.trim() === "") {
      toast.error("Please Enter Pincode");
    } else {
      let newData = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        city: city,
        phonenumber: phonenumber,
        state: state,
        pincode: pincode,
      };
      axios
        .post("http://localhost:6600/userlogin/register", newData)
        .then(() => {
          toast.success("Successfully Added");
          nullValueHandler();
          console.log("Data Added Done.");
          // location("/");
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
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              dob={dob}
              city={city}
              state={state}
              phonenumber={phonenumber}
              pincode={pincode}
              setCity={setCity}
              setDob={setDob}
              setState={setState}
              setPincode={setPincode}
              setPhonenumber={setPhonenumber}
            />
          }
        />
        <Route path="/status" element={<Status />} />
        <Route path="/profileupload" element={<ProfilePictureUpload />} />
        <Route path="/se" element={<ProfilePictureUpload />} />


        <Route path="*" element={<Errorpage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

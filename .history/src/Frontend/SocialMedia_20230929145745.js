import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserBook from "./UserBook";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { toast, ToastContainer } from "react-toastify";

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
  let [comment, setComment] = useState("");

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

  const location = useNavigate();
  //filtering_data
  const [filteremail,setFilterEmail] = useState([])
  const filterSameDataHandler = () => {
   const updateEmail = userData.filter((val) => {
      return val.email === email;
    });
    set
  };

  //user_registration_Handler
  const postDataHandler = (e) => {
    e.preventDefault();
    if (filterSameDataHandler.length) {
      toast.error("Email Already Exists");
    } else {
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
          dob: dob,
          city: city,
          phonenumber: phonenumber,
          state: state,
          pincode: pincode,
        };
        axios
          .post("http://localhost:6600/users/post", newData)
          .then(() => {
            // getLoginData();
            toast.success("Successfully Added");
            // nullValueHandler();
            // location("/");
          })
          .catch((error) => {
            console.log(error);
            toast.error('Data can"t added', { position: "top-right" });
          });
      }
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
      </Routes>
      <ToastContainer />
    </div>
  );
}

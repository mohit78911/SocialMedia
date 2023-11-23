import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import UiLogin from "./UiLogin";
import UiNew from "./UiNew";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";
import UiFeed from "./UiFeed";
import UIError from "./UIError";
import axios from "axios";
import UiRegistration from "./UiRegistration";
import { toast } from "react-toastify";

export default function UIMainComp() {
  const token = localStorage.getItem("token");

  //get_logedin_user_data
  const [user, setUser] = useState([]);
  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUser(result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ------------------InputData------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhonenumber] = useState();
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState();

  //  --------------= InputData =--------------

  //null_value_after_form_submited
  const nullValueHandler = () => {
    setDob("");
    setName("");
    setCity("");
    setEmail("");
    setState("");
    setPincode("");
    setPassword("");
    setPhonenumber("");
  };

  const location = useNavigate();

  //user_registration_Handler
  const postDataHandler = (e) => {
    e.preventDefault();
    const filterEmailData = users.filter((val) => val.email === email);
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
          location("/");
        })
        .catch((error) => {
          console.log(error);
          toast.error('Data can"t added', { position: "top-right" });
        });
    }
  };

  const [users, setUsers] = useState([]);

  // get all users data
  const getAllUsersDataHandler = () => {
    axios
      .get("http://localhost:6600/user/")
      .then((result) => {
        console.log("userData", result.data);
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDataHandler();
    getAllUsersDataHandler();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<UiLogin />} />
        <Route path="/register" element={<UiRegistration />} />
        <Route path="/*" element={<UIError />} />
        <Route path="ui" element={<UiNew />}>
          <Route path="home" element={<UiHome user={user} />} />
          <Route path="about" element={<UiAbout user={user} />} />
        </Route>
      </Routes>
    </div>
  );
}

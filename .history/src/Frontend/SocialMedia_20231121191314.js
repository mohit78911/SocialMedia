import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserBook from "./UserBook";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { toast, ToastContainer } from "react-toastify";
import Errorpage from "./Pages/Errorpage";
import EditData from "./Pages/EditProfileData";
import Settings from "./Pages/Settings";
import { Box } from "@mui/material";

export default function SocialMedia() {
  const token = localStorage.getItem("token");
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

  const [loadingDot, setLoadingDot] = useState();
  const [requestData, setRequestData] = useState([]);
  const getRequestHandler = (val) => {
    setLoadingDot(true);
    axios
      .get(`http://localhost:6600/friendrequest/requestlist/${val}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        setLoadingDot(false);
        console.log("requestData", result.data);
        setRequestData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get all request data
  const [requests, setRequests] = useState([]);
  const getallRequestHandler = () => {
    axios
      .get("http://localhost:6600/friendrequest/allrequest")
      .then((result) => {
        setRequests(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const requestCancelHandler = (id) => {
    axios
      .delete(`http://localhost:6600/friendrequest/deleterequest/${id}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        getallRequestHandler();
        console.log("request_Cancel_Successfully");
      })
      .catch((error) => {
        getallRequestHandler();
        console.log(error);
      });
  };

  //sendFriendRequestHandler
  const sendFriendRequestHandler = (receiverid) => {
    const sendRequestData = {
      sender: user._id,
      receiver: receiverid,
    };
    axios
      .post(
        `http://localhost:6600/friendrequest/sendrequest`,
        sendRequestData,
        {
          headers: { authorization: token },
        }
      )
      .then((result) => {
        getallRequestHandler();
        console.log("friendRequest_Sent");
      })
      .catch((error) => {
        getallRequestHandler();
        console.log("FriendRequest_not_sent or Already sent", error);
      });
  };

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

  //request delete handler
  const requestDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/friendrequest/deleterequest/${id}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        console.log("Request Deleted Done");
        getRequestHandler(user._id);
        getallRequestHandler();
      })
      .catch((error) => {
        getallRequestHandler();
        console.log(error);
      });
  };

  useEffect(() => {
    getallRequestHandler();
    getAllUsersDataHandler();
    getUserDataHandler();
  }, []);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <UserBook
              user={user}
              users={users}
              requests={requests}
              loadingDot={loadingDot}
              requestData={requestData}
              getRequestHandler={getRequestHandler}
              getallRequestHandler={getallRequestHandler}
              requestCancelHandler={requestCancelHandler}
              requestDeleteHandler={requestDeleteHandler}
              sendFriendRequestHandler={sendFriendRequestHandler}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Registration
              dob={dob}
              city={city}
              name={name}
              email={email}
              state={state}
              setDob={setDob}
              pincode={pincode}
              setName={setName}
              setCity={setCity}
              setEmail={setEmail}
              password={password}
              setState={setState}
              setPincode={setPincode}
              setPassword={setPassword}
              phonenumber={phonenumber}
              setPhonenumber={setPhonenumber}
              postDataHandler={postDataHandler}
            />
          }
        />

        <Route path="/profileupload" element={<EditData />} />
        <Route
          path="/settings"
          element={
            <Settings
              users={users}
              requests={requests}
              loadingDot={loadingDot}
              requestData={requestData}
              getRequestHandler={getRequestHandler}
              requestCancelHandler={requestCancelHandler}
              sendFriendRequestHandler={sendFriendRequestHandler}
              requestDeleteHandler={requestDeleteHandler}
            />
          }
        />

        <Route path="*" element={<Errorpage />} />
      </Routes>
      <ToastContainer />
    </Box>
  );
}

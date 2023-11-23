import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import UiLogin from "./UiLogin";
import UiNew from "./UiNew";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";
import UIError from "./UIError";
import axios from "axios";
import UiRegistration from "./UiRegistration";
import { toast } from "react-toastify";
import { Box } from "@mui/material";

export default function UIMainComp() {
  const token = localStorage.getItem("token");
  const location = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loadingDot, setLoadingDot] = useState();
  const [requestData, setRequestData] = useState([]);
  // ------------------InputData------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhonenumber] = useState();
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //get_logedin_user_data
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

  //get all request data

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

  useEffect(() => {
    getallRequestHandler();
    getUserDataHandler();
    getAllUsersDataHandler();
  }, []);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<UiLogin />} />
        <Route
          path="/register"
          element={
            <UiRegistration
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
       
        <Route
          path="ui"
          element={
            <UiNew
              requests={requests}
              requestData={requestData}
              getRequestHandler={getRequestHandler}
              users={users}
              user={user}
              loadingDot={loadingDot}
              sendFriendRequestHandler={sendFriendRequestHandler}
              requestCancelHandler={requestCancelHandler}
            />
          }
        >
          <Route
            path="home"
            element={
              <UiHome
                user={user}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
              />
            }
          />
          <Route path="about" element={<UiAbout user={user} />} />
        </Route>
      </Routes>
    </Box>
  );
}

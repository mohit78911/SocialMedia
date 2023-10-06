import React, { useState } from "react";
import "./Registration.css";
import { Box, Button, Switch, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function Registration({
  postDataHandler,
  name,
  setName,
  email,
  setEmail,
  setPassword,
  password,
  dob,
  city,
  state,
  phonenumber,
  pincode,
  setCity,
  setDob,
  setState,
  setPincode,
  setPhonenumber,
}) {
  const [visible, setVisible] = useState(false);
  const visiblePasswordHandler = () => {
    setVisible(!visible);
  };

  return (
    <Box>
      <Box className="register">
        <Box className="firstContainer">
          <form onSubmit={postDataHandler} className="inputfieldContainer">
            <input
              placeholder="Name"
              className="mb-3 inputsection"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className="mb-3 inputsection"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="passwordContainer">
              <input
                placeholder="Password"
                className="mb-3 inputsection"
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="passwordVisible" onClick={visiblePasswordHandler}>
                {visible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <input
              placeholder="Date of Birth"
              className="mb-3 inputsection"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              placeholder="City"
              className="mb-3 inputsection"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="MobileNumber"
              className="mb-3 inputsection"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <input
              placeholder="State"
              className="mb-3 inputsection"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              placeholder="PinCode"
              className="mb-3 inputsection"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />

            <br />
            <button className="addDataBtn" type="submit">
              ADD DATA
            </button>
            <Typography
              className="mt-3 registrationtxt"
              sx={{ opacity: "0.8" }}
            >
              Have Already Account{" "}
              <NavLink className="linktag" to="/">
                ClickHere!
              </NavLink>
            </Typography>
          </form>
        </Box>
        <Box className="secondContainer">
          <Box
            component="img"
            src="https://st.depositphotos.com/2510389/3050/v/950/depositphotos_30501193-stock-illustration-vector-illustration-of-registration.jpg"
            width={"100%"}
            className="registrationimg"
          />
        </Box>
      </Box>
    </Box>
  );
}

import React, { useState } from "react";
import "./Registration.css";
import { Box, Button, Switch, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Registration({
  postDataHandler,
  name,
  setName,
  email,
  setEmail,
  setPassword,
  password,
  lastseen,
  setLastSeen,
  imgpost,
  setImgpost,
  setUserProfile,
  userProfile,
}) {
  const [visible,setVisible] = useState(false)
  const visiblePasswordHandler = ()=>{
    setVisible(!visible)
  }
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
            <input
              placeholder="Password"
              className="mb-3 inputsection"
              type={visible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Switch checked={visible} onchang/>
            <input
              placeholder="Lastseen"
              className="mb-3 inputsection"
              value={lastseen}
              onChange={(e) => setLastSeen(e.target.value)}
            />
            <input
              placeholder="Userprofile"
              className="mb-3 inputsection"
              value={userProfile}
              onChange={(e) => setUserProfile(e.target.value)}
            />
            <input
              placeholder="Imgpost"
              className="mb-3 inputsection"
              value={imgpost}
              onChange={(e) => setImgpost(e.target.value)}
            />
            <br />
            <Button type="submit">Add Data</Button>
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

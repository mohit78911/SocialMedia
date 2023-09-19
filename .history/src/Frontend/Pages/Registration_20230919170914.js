import React from "react";
import "./Registration.css";
import { Box, Button, TextField, Typography } from "@mui/material";
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
  return (
    <Box>
      <Box className="register">
        <Box className="firstContainer">
          <form onSubmit={postDataHandler} className="inputfieldContainer">
            <input
              placeholder="Name"
              className="m-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className="m-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="m-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Lastseen"
              className="m-1"
              value={lastseen}
              onChange={(e) => setLastSeen(e.target.value)}
            />
            <input
              placeholder="Userprofile"
              className="m-1"
              value={userProfile}
              onChange={(e) => setUserProfile(e.target.value)}
            />
            <input
              placeholder="Imgpost"
              className="m-1"
              value={imgpost}
              onChange={(e) => setImgpost(e.target.value)}
            />
            <br />
            <Button type="submit">Add Data</Button>
            <Typography className="mt-3" sx={{ opacity: "0.8" }}>
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
          />
        </Box>
      </Box>
    </Box>
  );
}

import React from "react";
import "./Registration.css";
import { Box, Button, TextField, Typography } from "@mui/material";

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
          <form onSubmit={postDataHandler} className='inputfieldContainer'>
            <TextField
              label="Name"
              className="m-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              className="m-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              className="m-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Lastseen"
              className="m-1"
              value={lastseen}
              onChange={(e) => setLastSeen(e.target.value)}
            />
            <TextField
              label="Userprofile"
              className="m-1"
              value={userProfile}
              onChange={(e) => setUserProfile(e.target.value)}
            />
            <TextField
              label="Imgpost"
              className="m-1"
              value={imgpost}
              onChange={(e) => setImgpost(e.target.value)}
            />
            <br />
            <Button type="submit">Add Data</Button>
          </form>
        </Box>
        <Box className="secondContainer"><Box component="img" src="https://st.depositphotos.com/2510389/3050/v/950/depositphotos_30501193-stock-illustration-vector-illustration-of-registration.jpg" width={"100%"}/></Box>
      </Box>
    </Box>
  );
}

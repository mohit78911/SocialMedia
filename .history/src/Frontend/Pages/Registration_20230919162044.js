import { Box } from "@mui/material";
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
      <Box className="userField p-5">
        <form onSubmit={postDataHandler}>
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
    </Box>
  );
}

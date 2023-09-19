import { Switch, TextField, Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

export default function Login({ userData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };
  const location = useNavigate();
  const addDataHandler = () => {
    const filterData = userData.filter(
      (val) => val.email === email && val.password === password
    );

    const trimedEmail = email.trim().trimStart().trimEnd();
    const trimedPassword = password.trim().trimStart().trimEnd();

    if (trimedEmail.length === 0) {
      alert("Please Fill Email");
    } else if (trimedPassword.length === 0) {
      alert("Please Fill Password");
    } else if (password.length < 6) {
      alert("Password must be 6 charactes");
    } else {
      if (filterData.length) {
        toast.("Welcome!!");
        localStorage.setItem("userLoginData", JSON.stringify([filterData]));
        setTimeout(() => {
          location("/home");
        }, 3000);
      } else {
        alert("Invalid Details");
      }
    }
  };
  return (
    <Box>
      <Box className="flex-contain">
        <Box className="oneContain">
          <Box component='img'
            src="https://storage.googleapis.com/pai-images/def5837fff8541f9bf92db053a3eeeec.jpeg"
            width={"100%"}
            className="imglogin"
          />
        </Box>
        <Box className="secondContain">
          <Box className="loginContainer container">
            <Box className="textLogin">
              <Typography className="firsttxt">Welcome to SocialMedia! 👋🏻</Typography>
              <Typography className="descriptiontxt">
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Box>
              <TextField
                label="Email"
                className="mt-4 pb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addDataHandler();
                  }
                }}
              />
              <br />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="pt-2"
                label="Password"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addDataHandler();
                  }
                }}
              />
            </Box>
            <Switch
              type="checkbox"
              checked={showPassword}
              onClick={visiblePassword}
              color="warning"
            />
            <Typography>Show Password</Typography>
            <Box>
              <button className="loginbtn" onClick={addDataHandler}>
                Login
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

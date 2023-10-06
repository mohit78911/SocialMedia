import { Switch, TextField, Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Login.css";

export default function Login({ userData }) {
  const location = useNavigate();
  //------------------------------------------------------------
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //------------------------------------------------------------

  //show_Password_Function
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  //loginDataHandler
  const getData = () => {
    let data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:6600/userlogin/login", data)
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", JSON.stringify(result.data.token));
        toast.success("user_profileAccessed");
        localStorage.setItem(
          "userLoginData",
          JSON.stringify([result.data.UserProfile_Accessed])
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to login!");
      });
  };

  //------------------------------------------------
   
 

  //------------------------------------------------------

  return (
    <Box>
      <Box className="flex-contain">
        <Box className="oneContain">
          <Box
            component="img"
            src="https://storage.googleapis.com/pai-images/def5837fff8541f9bf92db053a3eeeec.jpeg"
            width={"100%"}
            className="imglogin"
          />
        </Box>
        <Box className="secondContain">
          <Box className="loginContainer container">
            <Box className="textLogin">
              <Typography className="firsttxt">
                Welcome to SocialMedia! 👋🏻
              </Typography>
              <Typography className="descriptiontxt">
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Box>
              <TextField
                label="Email"
                className="mt-4 pb-2 inputlogin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getData();
                  }
                }}
              />
              <br />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="pt-2 inputlogin"
                label="Password"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getData();
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
            <Typography className="showpassword">Show Password</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {loading ? (
                <Box
                  component="img"
                  src="https://usagif.com/wp-content/uploads/loading-29.gif"
                  width={50}
                />
              ) : (
                <Box>
                  <button className="loginbtn" onClick={getData}>
                    Login
                  </button>
                  <Typography
                    className="mt-3 switchpage"
                    sx={{ opacity: "0.8" }}
                  >
                    Don't have Account{" "}
                    <NavLink className="linktag" to="/register">
                      ClickHere!
                    </NavLink>
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}

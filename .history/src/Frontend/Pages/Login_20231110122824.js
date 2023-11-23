import { Switch, TextField, Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Login.css";

export default function Login() {
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
  const userLoginHandler = () => {
    if (email.trim() === "") {
      toast.error("Email must required");
    } else if (password.trim() === "") {
      toast.error("password must required");
    } else {
      let data = {
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:6600/userlogin/login", data)
        .then((result) => {
          setLoading(true);
          console.log("result", result);
          localStorage.setItem("token", result.data.token);
          toast.success("user_profileAccessed");
          setTimeout(() => {
            location("/home");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Invalid Email || Password");
        });
    }
  };

  return (
    <Box className="loginBackground">
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
              <Typography className="welcomeLogo">
                <Typography>WELCOME</Typography>
                
                WELCOME TO SoCiALMEDiA! 👋🏻
              </Typography>
              <Typography className="descriptiontxt">
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Box>
              <TextField
                fullWidth
                label="Email"
                className="mt-4 pb-2 inputlogin"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    userLoginHandler();
                  }
                }}
              />
              <br />
              <TextField
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="pt-2 inputlogin"
                label="Password"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    userLoginHandler();
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
                <Box className="loginbtncomponent">
                  <Button
                    fullWidth
                    sx={{ color: "white", mt: 2 }}
                    className="loginbtn"
                    onClick={userLoginHandler}
                  >
                    <Typography className="loginanimation">Login</Typography>
                  </Button>
                  <Typography
                    className="mt-3 alreadyhaveacc"
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

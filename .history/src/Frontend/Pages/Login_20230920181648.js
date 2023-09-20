import { Switch, TextField, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Login.css";

export default function Login({ userData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
      toast.error("Please Fill Email", { position: "top-right" });
    } else if (trimedPassword.length === 0) {
      toast.error("Please Fill Password", { position: "top-right" });
    } else if (password.length < 6) {
      toast("Password must be 6 charactes");
    } else {
      if (filterData.length) {
        setLoading(true);
        toast.success("Welcome!!", { position: "top-right" });
        localStorage.setItem("userLoginData", JSON.stringify([filterData]));
        setTimeout(() => {
          location("/home");
          setLoading(false);
        }, 3000);
      } else {
        toast.error("Invalid Details", { position: "top-right" });
      }
    }
  };
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
                    addDataHandler();
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
            <Typography className="showpassword">Show Password</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {loading ? (
                <Box
                  component="img"
                  src="https://usagif.com/wp-content/uploads/loading-29.gif"
                  width={50}
                />
              ) : null}
            </Box>
            <Box>
              <button className="loginbtn" onClick={addDataHandler}>
                Login
              </button>
              <Typography className="mt-3 switchpage" sx={{ opacity: "0.8" }}>
                Don't have Account{" "}
                <NavLink className="linktag" to="/register">
                  ClickHere!
                </NavLink>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}

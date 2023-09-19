import { Switch, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
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
      alert("email me data dalo");
    } else if (trimedPassword.length === 0) {
      alert("password me data dalo");
    } else if (password.length < 6) {
      alert("bhai itna garib password mat dalo");
    } else {
      if (filterData.length) {
        alert("jao bhai andr ja skte ho");
        localStorage.setItem("userLoginData", JSON.stringify([filterData]));
        setTimeout(() => {
          location("/home");
        }, 3000);
      } else {
        alert("kha chale bhai....? Details shi dal bhai");
        
      }
    }
  };
  return (
    <div>
      <div className="flex-contain">
        <div className="oneContain">
          <img
            src="https://storage.googleapis.com/pai-images/def5837fff8541f9bf92db053a3eeeec.jpeg"
            width={"100%"}
            className="imglogin"
          />
        </div>
        <div className="secondContain">
          <div className="loginContainer container">
            <div className="textLogin">
              <h6 className="firsttxt">Welcome to SocialMedia! 👋🏻</h6>
              <span className="secondtxt">
                Please sign-in to your account and start the adventure
              </span>
            </div>
            <div className="inputText">
              <TextField
                label="Email"
                className="mt-4 pb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown((e)=>{
                  if(e.key === 'Enter')(
                    
                  )
                })
              />
              <br />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="pt-2"
                label="Password"
              />
            </div>

            <Switch
              type="checkbox"
              checked={showPassword}
              onClick={visiblePassword}
              color="warning"
            />
            <label>Show Password</label>
            <div>
              <button className="loginbtn" onClick={addDataHandler}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

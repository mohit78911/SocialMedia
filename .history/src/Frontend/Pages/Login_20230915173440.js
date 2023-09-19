import { Switch, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

export default function Login({userData}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const addDataHandler = ()=>{
    userData.filter((val)=>)
  }
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
              <h6>Welcome to SocialMedia! 👋🏻</h6>
              <span>
                Please sign-in to your account and start the adventure
              </span>
            </div>
            <div className="inputText">
              <TextField
                label="Email"
                className="mt-4 pb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <button className="loginbtn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

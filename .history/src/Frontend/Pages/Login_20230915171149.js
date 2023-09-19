import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const visiblePassword = () => {
    setShowPassword(!showPassword);
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
          <div className="loginContainer">
            <div className="textLogin">
              <h6>Welcome to SocialMedia! 👋🏻</h6>
              <span>
                Please sign-in to your account and start the adventure
              </span>
            </div>
            <div className="inputText">
              <TextField label="Email" className="mt-4 pb-2" />
              <TextField
                type={showPassword ? "text" : "password"}
                className="pt-2"
                label="Password"
              />
            </div>
            <input type="/>
          </div>
        </div>
      </div>
    </div>
  );
}

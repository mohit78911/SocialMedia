import React, { useState } from "react";
import "./Registration.css";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function Registration({
  dob,
  name,
  city,
  email,
  state,
  setDob,
  setName,
  pincode,
  setCity,
  setEmail,
  password,
  setState,
  setPincode,
  phonenumber,
  setPassword,
  setPhonenumber,
  postDataHandler,
}) {
  const [visible, setVisible] = useState(false);
  const visiblePasswordHandler = () => {
    setVisible(!visible);
  };

  return (
    <Box className="RegistrationBackground">
      <Box className="register">
        <Box className="firstContainer">
          <form onSubmit={postDataHandler} className="inputfieldContainer">
            <Typography className="registrationText">
              USER REGiSTRATiON iN SoCiALMEDiA
            </Typography>
            <input
              placeholder="NAME"
              className="mb-3 inputsection"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="EMAIL"
              className="mb-3 inputsection"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box className="passwordContainer">
              <input
                placeholder="PASSWORD"
                className="mb-3 inputsection"
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="true"
              />
              <Box className="passwordVisible" onClick={visiblePasswordHandler}>
                {visible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </Box>
            </Box>
            <input
              placeholder="DATE OF BIRTH"
              className="mb-3 inputsection"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              placeholder="CITY"
              className="mb-3 inputsection"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="MOBILE NUMBER"
              className="mb-3 inputsection"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <input
              placeholder="STATE"
              className="mb-3 inputsection"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              placeholder="PINCODE"
              className="mb-3 inputsection"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />

            <br />
            <button className="addDataBtn" type="submit">
              SUBMIT
            </button>
            <Typography
              className="mt-3 registrationtxt"
              sx={{ opacity: "0.8" }}
            >
              Have Already Account{" "}
              <NavLink className="clickhereRegistration" to="/">
                ClickHere!
              </NavLink>
            </Typography>
          </form>
        </Box>
        <Box className="secondContainer">
          <Box
            component="img"
            src="https://theonetechnologies.com/images/portfolio/social-media-app-development-iphone.webp"
            width={"100%"}
            className="registrationimg"
          />
        </Box>
      </Box>
    </Box>
  );
}


export default 
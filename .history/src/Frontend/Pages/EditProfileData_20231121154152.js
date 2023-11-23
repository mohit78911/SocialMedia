import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./EditProfileData.css";
import { toast } from "react-toastify";

import { motion } from "framer-motion";

export default function EditProfileData({ userDetails }) {
  const [userId, setUserId] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const [username, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const parseData = JSON.parse(user);
    // console.log("user", parseData);
    setUserId(parseData);
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  //nullvaluehandler
  const nullValueHandler = () => {
    setDob("");
    setUserName("");
    setPhonenumber("");
    setProfilePicture("");
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    // Check if any field has new data
    if (!username && !profilePicture && !dob && !phonenumber) {
      toast.error("No Changes in Any Field ");
      return;
    }
    const newData = {};
    if (username.trim() !== "") {
      newData.name = username;
    }

    if (profilePicture.trim() !== "") {
      newData.userprofile = profilePicture;
    }

    if (dob.trim() !== "") {
      newData.dob = dob;
    }

    if (phonenumber.trim() !== "") {
      newData.phonenumber = phonenumber;
    }

    if (Object.keys(newData).length === 0) {
      toast.error("No changes made");
      return;
    }

    axios
      .put(`http://localhost:6600/user/update/${userId._id}`, newData)
      .then(() => {
        userDetails();
        console.log("upload Done!");
        nullValueHandler();
        toast.success("Profile Has been Updated!");
      })
      .catch((error) => {
        userDetails();
        console.log(error);
      });
  };

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("profilePicture", file);
    axios
      .post("http://localhost:6600/user/uploadimage", formData, {
        headers: { authorization: token },
      })
      .then((response) => {
        console.log(response.data);
        toast("Image Uploaded Done");
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <Box className="editComponent">
        <Box className="inputfields">
          <Box className="containe">
            <Typography sx={{ color: "#007aff" }}>EDIT YOUT PROFILE</Typography>
            <form onSubmit={uploadHandler}>
              <input
                placeholder="Name"
                className="updateinput"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <div>
                <input
                  // placeholder="ProfilePicture"
                  // className="updateinput"
                  // value={profilePicture}
                  // onChange={(e) => setProfilePicture(e.target.value)}
                  style={{ display: "none" }}
                  id="profilepicture"
                  onChange={handleFileChange}
                  type="file"
                />
                <label style={{ cursor: "pointer" }} htmlFor="profilepicture">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.7 }}
                  >
                    <img
                      src="data:image/png;base64,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"
                      width={80}
                    />
                  </motion.div>
                </label>
                <Button onClick={handleUpload}>upload</Button>
              </div>
              <input
                placeholder="Date Of Birth"
                className="updateinput"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <input
                placeholder="Phone_Number"
                className="updateinput"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <Button variant="contained" type="submit">
                UPDATE YOUR PROFILE
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

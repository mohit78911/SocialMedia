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

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ".//Setting.css";
import EditProfileData from "./EditProfileData";
import FriendsList from "./FriendsList";

export default function Settings({ getRequestHandler, requestData ,user}) {
  const [editbtn,setEditBtn] = useState(false)
  const [userDetail, setUserDetail] = useState([]);
  const userDetails = () => {
    const getDetails = localStorage.getItem("userDetails");
    const details = JSON.parse(getDetails);
    console.log("details", details);
    setUserDetail(details);
  };


  const editBtnHandler = ()=>{
    setEditBtn(!editbtn)
  }
  useEffect(() => {
    userDetails();
  }, []);

  return (
    <Box>
      <Navbar getRequestHandler={getRequestHandler} requestData={requestData} />
      <Box className="mainContaineProfile">
        <Box className="centerEditContaine">
          <Box
            className="editProfileimg"
            component="img"
            src={userDetail.userprofile}
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "8px" }}>
            {userDetail.name}
          </Typography>
          <Typography>{userDetail.email}</Typography>
          <Typography>{userDetail.dob}</Typography>
          <Typography>
            {userDetail.phonenumber ? (
              <Typography>+{userDetail.phonenumber}</Typography>
            ) : null}
          </Typography>
        </Box>
        <Button onClick={editBtnHandler}></Button>
      </Box>
      <Box>
        <FriendsList user={user}/>
      </Box>
      <Box className="mainContaine">
        <Box className="firstContaine">
          <Box>
            <EditProfileData />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

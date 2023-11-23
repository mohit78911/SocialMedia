import React from "react";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

function SideBar({ user, getFriendsListHandler }) {
  return (
    <Box className="UISideBar">
      <Box className="sideBarButtons">
        <Button><Link to="/ui/home" className="UiLinkBtn">Home</Link></Button>
        <Button><Link to="/ui/about" className="UiLinkBtn">Edit profile</Link></Button>

        <Button><Link to="/ui/friends" className="UiLinkBtn">Friends</Link></Button> 
        <NavLink
          to="/ui/friends"
          onClick={() => getFriendsListHandler(user._id)}
          className="sideBar-profile mb-1"
        >
          Friends
        </NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>

        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </Box>
    </Box>
  );
}

export default SideBar;

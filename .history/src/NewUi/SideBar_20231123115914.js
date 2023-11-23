import React from "react";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

function SideBar({ user, getFriendsListHandler }) {
  return (
    <Box className="UISideBar">
      <Box className="sideBarButtons">
        <Button><Link to="/ui/home" className="homelink">Home</Link></Button>
        <NavLink className="sideBar-profile mb-1" to="/ui/home">
          Home
        </NavLink>
        <NavLink className="sideBar-profile mb-1" to="/ui/about">
          Ed<span style={{ color: "rgb(206, 49, 49)" }}>i</span>t Prof
          <span style={{ color: "rgb(206, 49, 49)" }}>i</span>le
        </NavLink>
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

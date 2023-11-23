import React from "react";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function SideBar({ user, getFriendsListHandler }) {
  return (
    <Box className="UISideBar">
      <Box className="sideBarButtons">
        <Button>
          <Link to="/ui/home" className="UiLinkBtn">
            <HomeIcon />
            Home
          </Link>
        </Button>
        <Button>
          <Link to="/ui/about" className="UiLinkBtn">
            Edit profile
          </Link>
        </Button>

        <Button onClick={() => getFriendsListHandler(user._id)}>
          <Link to="/ui/friends" className="UiLinkBtn">
            Friends
          </Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">Profile</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default SideBar;

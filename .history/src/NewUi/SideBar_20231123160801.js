import React from "react";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function SideBar({ user, getFriendsListHandler }) {
  return (
    <Box className="UISideBar">
      <Box className="sideBarButtons">
        <Button>
          <Link to="/ui/home" className="UiLinkBtn">
            <HomeIcon />
            &nbsp;<span className="UI-sidebtnshow">Home</span> 
          </Link>
        </Button>
        <Button>
          <Link to="/ui/about" className="UiLinkBtn">
            <EditIcon />
            &nbsp;<span className="UI-sidebtnshow">edit profile</span> 
          </Link>
        </Button>

        <Button onClick={() => getFriendsListHandler(user._id)}>
          <Link to="/ui/friends" className="UiLinkBtn">
            <Diversity3Icon />
            &nbsp;<span className="UI-sidebtnshow">friends</span> 
          </Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            <span className="UI-sidebtnshow">profi</span> 
          </Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            Profile
          </Link>
        </Button>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
      <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            Profile
          </Link>
        </Button>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
      <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            Profile
          </Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            Profile
          </Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            Profile
          </Link>
        </Button>
      </Box>
      <hr style={{ color: "white" }}></hr>
      <Box className="sideBarButtons">
      <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            Profile
          </Link>
        </Button>

        <Button>
          <Link className="UiLinkBtn">
            <AccountCircleIcon />
            Profile
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default SideBar;

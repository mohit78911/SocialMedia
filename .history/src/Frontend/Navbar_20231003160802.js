import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import "./Navbar.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const location = useNavigate();
  const logOutHandler = () => {
    location("/");
    localStorage.removeItem("userLoginData");
    localStorage.removeItem("token");
  };

  //get_Data_from_localStorage
  const [userLoginData, setUserLoginData] = useState([]);
  const getLocalStorageData = localStorage.getItem("userLoginData");
  const getDetails = () => {
    const userDetails = JSON.parse(getLocalStorageData);
    if(userDetails && userDetails.length)
    setUserLoginData(userDetails);
    // console.log("getItemlocalstorage", userDetails);
    // console.log("userloginData", userLoginData);
  };
  useEffect(() => {
    getDetails();
  },[]);
  return (
    <AppBar
      position="static"
      sx={{ background: "rgb(255, 255, 255, 0.2)", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InstagramIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SOCIAL MEDIA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>
                  <Button>Blog</Button>
                  <br />
                  <Button>Products</Button>
                  <br />
                  <Button>Feed</Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <InstagramIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            SOCIAL MEDIA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{ my: 2, color: "black", display: "block", fontWeight: 600 }}
            >
              Products
            </Button>
            <Button
              sx={{ my: 2, color: "black", display: "block", fontWeight: 600 }}
            >
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Feed
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userLoginData.map((val, j) => {
                  return (
                    <div key={j}>
                      <img
                        src={val[0] ? val[0].userprofile : null}
                        width={50}
                        className="headerimg"
                      />
                    </div>
                  );
                })}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography>
                  <div>
                    {userLoginData.map((val, j) => {
                      return (
                        <div key={j}>
                          <div>{val[0] ? val[0].name : null}</div>
                        </div>
                      );
                    })}
                  </div>
                  <Button>profile</Button>
                  <br />
                  <Button>Account</Button>
                  <br />
                  <Button>Dashboard</Button>
                  <br />
                  <Button onClick={logOutHandler}>LogOut</Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

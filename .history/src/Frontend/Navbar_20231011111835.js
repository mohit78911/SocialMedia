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
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

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
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
  };

  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUsers(result.data);
        // console.log("resultuserdata", result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDataHandler();
  }, []);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background: "rgb(255, 255, 255, 0.2)",
          color: "black",
          boxShadow: "none",
          textDecoration:"und"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <InstagramIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Libre Baskerville, serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SocialMedia
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
                    <Button>
                      <NavLink to="/home" className="navlinkbtn">
                        HOME
                      </NavLink>
                    </Button>
                    <br />
                    <Button>Products</Button>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <InstagramIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Libre Baskerville, serif",
                fontWeight: 700,

                color: "inherit",
                textDecoration: "none",
              }}
            >
              SocialMedia
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: 600,
                  fontFamily: "Libre Baskerville, serif",
                }}
              >
                <NavLink to="/home" className="navlinkbtn">
                  HOME
                </NavLink>
              </Button>
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: 600,
                  fontFamily: "Libre Baskerville, serif",
                }}
              >
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Feed
                </Link>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box>
                    <Box
                      src={
                        users.userprofile
                          ? users.userprofile
                          : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                      }
                      width={50}
                      component="img"
                      className="headerimg"
                    />
                  </Box>
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
                  <Typography className="navbtnoptions">
                    <Typography>{users && <div>{users.name}</div>}</Typography>
                    <Button>
                      <NavLink className="navlinkbtn" to="/settings">
                        profile
                      </NavLink>{" "}
                    </Button>
                    <Button>Account</Button>
                    <Button>Dashboard</Button>
                    <Button onClick={logOutHandler}>LogOut</Button>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar;

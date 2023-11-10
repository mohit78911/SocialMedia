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
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
// --------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Activity from "./Pages/Activity";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});

function Navbar({
  requestData,
  getRequestHandler,
  sendFriendRequestHandler,
  users,
  requests,
}) {
  const [timer, setTimer] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [friendRequest, setFriendRequest] = React.useState(false);
  const [details, setDetails] = useState([]);
  const [open, setOpen] = React.useState(false);

  //friendRequest Decline Handler
  const requestCancelHandler = (id) => {
    axios
      .delete(`http://localhost:6600/friendrequest/deleterequest/${id}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        // getAllRequestDataHandler();
        console.log("request_Cancel_Successfully");
      })
      .catch((error) => {
        // getAllRequestDataHandler();
        console.log(error);
      });
  };

  //timer for pending or cancel request button
  useEffect(() => {
    setTimeout(() => {
      setTimer(!timer);
    }, 1000);
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenRequestBox = (event) => {
    setFriendRequest(!friendRequest);
    getRequestHandler(user._id);
  };

  const handleCloseRequestBox = () => {
    setFriendRequest(null);
  };

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

  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");
  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUser(result.data);
        // console.log("resultuserdata", result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Accept Request Handler
  const acceptFriendRequestHandler = () => {
    axios
      .put(
        `http://localhost:6600/friendrequest/acceptfriendrequest/${user._id}`
      )
      .then((result) => {
        console.log("Request Accepted ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Decline Request Handler
  const declineRequestHandler = () => {
    axios
      .put(
        `http://localhost:6600/friendrequest/rejectfriendrequest/${user._id}`,
        { status: "rejected" }
      )
      .then((result) => {
        console.log("requst Rejected");
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  const [action, setAction] = useState("accept");
  const requestStatusHandler = (id) => {
    axios
      .put(
        `http://localhost:6600/friendrequest/friendrequest/651fd5dfab759e8607eaf591`,
        {
          action: action,
        },
        { headers: { authorization: token } }
      )
      .then((result) => {
        console.log("updatedSuccessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDataHandler();
    // getAllRequestDataHandler();
    getRequestHandler(user._id);
  }, []);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background: "rgb(255, 255, 255, 0.2)",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #e7e7e7",
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
                  <Typography className="dropButtons">
                    <Button>
                      <NavLink to="/home" className="navlinkbtn">
                        HOME
                      </NavLink>
                    </Button>
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
              href="/home"
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
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/home"
                >
                  Feed
                </Link>
              </Button>
            </Box>

            <Box className="navSeachContain">
              <input className="navInput" placeholder="Search" />
              <Button>
                <SearchIcon />
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <Button
                  onClick={() => {
                    handleOpenRequestBox();
                  }}
                >
                  <PeopleAltIcon />
                  {requests.filter((item) => item.receiver === user._id).length}
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={friendRequest}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(friendRequest)}
                onClose={handleCloseRequestBox}
              >
                <MenuItem onClick={handleCloseRequestBox}>
                  {/* Friend_request data aayega yaha par */}
                  <Box className="requestContainer">
                    {requestData.length === 0 ? (
                      <Typography
                        sx={{
                          color: "skyblue",
                          display: "grid",
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <SentimentVeryDissatisfiedIcon />
                        </Box>
                        NO Requests
                      </Typography>
                    ) : (
                      <Box>
                        {requestData.map((item, i) => {
                          return (
                            <Box className="requestContaine" key={i}>
                              <Box className="alignRequest">
                                <Box
                                  className="requestimg"
                                  component="img"
                                  src={item.sender.userprofile}
                                />
                                <Typography>{item.sender.name}</Typography>
                              </Box>
                              <Box className="requestbtn">
                                <button
                                  onClick={() => acceptFriendRequestHandler()}
                                  className="btn btn-primary m-1"
                                >
                                  Accept
                                </button>
                                <button
                                  onClick={() => {
                                    // getAllRequestDataHandler();
                                    requestDeleteHandler(user._id);
                                    console.log("id", item._id);
                                  }}
                                  className="btn btn-danger m-1"
                                >
                                  Reject
                                </button>
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
            {/* persons details */}
            <Box className="peoplelist">
              <Button onClick={handleClickOpen}>Peson's</Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"People List (Suggestions)"}</DialogTitle>
                <DialogContent>
                  <Box>
                    {users.map((value, i) => {
                      //skiping user whom Already_logedIn
                      if (value._id === user._id) {
                        return null;
                      }
                      return (
                        <Box key={i} className="activityContainer">
                          <Box
                            onClick={() => {
                              setDetails(value);
                              handleClickOpen();
                            }}
                            className="activityUser"
                          >
                            <Box
                              component="img"
                              src={value ? value.userprofile : null}
                              className="imgprofile"
                            />
                            &nbsp;
                            <Typography>{value ? value.name : null}</Typography>
                          </Box>

                          {requests.some(
                            (item) =>
                              item.receiver === value._id &&
                              item.sender === user._id
                          ) ? (
                            <Typography
                              onClick={() => {
                                requestCancelHandler(value._id);
                                console.log(value._id);
                              }}
                              sx={{ mr: 1, opacity: "0.4" }}
                            >
                              {timer ? "Pending" : "Cencel"}
                            </Typography>
                          ) : (
                            <Button
                              variant="contained"
                              sx={{ mr: 1 }}
                              onClick={() => {
                                sendFriendRequestHandler(value._id);
                              }}
                            >
                              Add
                            </Button>
                          )}
                        </Box>
                      );
                    })}
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
            {/* ------------------------------------------------ */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box>
                    <Box
                      src={
                        user.userprofile
                          ? user.userprofile
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
                    <Typography>{user && <div>{user.name}</div>}</Typography>
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

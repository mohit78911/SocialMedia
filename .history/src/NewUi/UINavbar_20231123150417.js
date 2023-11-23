import "./UiNavbar.css";
import axios from "axios";
import Menu from "@mui/material/Menu";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import IconButton from "@mui/material/IconButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});

export default function UINavbar({
  user,
  users,
  requests,
  loadingDot,
  requestData,
  getRequestHandler,
  requestCancelHandler,
  requestDeleteHandler,
  sendFriendRequestHandler,
  getFriendsListHandler,
}) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [timer, setTimer] = React.useState(false);
  const [friendRequest, setFriendRequest] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //navigation from react router dom
  const location = useNavigate();
  const logOutHandler = () => {
    location("/");
    localStorage.removeItem("userLoginData");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
  };

  //Accept Request Handler
  const acceptFriendRequestHandler = (id) => {
    axios
      .put(
        `http://localhost:6600/friendrequest/friendrequest/acceptfriendrequest/${id}`
      )
      .then((result) => {
        console.log("Request Accepted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="Ui-nav">
        <div className="UiNav-logo">
          <span className="ui-LogoChanger">SOC</span>
          <span className="Ui-iChange">i</span>
          <span className="ui-LogoChanger">ALMED</span>
          <span className="Ui-iChange">i</span>
          <span className="ui-LogoChanger">A</span>
        </div>

        {/* persons details with button, when user use app in cellphone*/}
        <Box className="Ui-navContaine">
          <Box className="peoplelist">
            <Button onClick={handleClickOpen}>
              <Diversity2Icon style={{ color: "white" }}></Diversity2Icon>
            </Button>
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
                  {users &&
                    users.map((value, i) => {
                      //skiping user whom Already_logedIn
                      if (value._id === user._id) {
                        return null;
                      }
                      return (
                        <Box key={i} className="activityContainer">
                          <Box className="activityUser">
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
                              {timer ? "Pending" : "Cancel"}
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

          {/* ------------------------------------- */}
          <div className="UiNav-btns">
            <div className="NavUI-btn">
              <NavLink to="/ui/home" className="NavUI-btn">
                Home
              </NavLink>
              <NavLink
                onClick={() => getFriendsListHandler(user._id)}
                className="NavUI-btn"
                to="/ui/friends"
              >
                Friends
              </NavLink>
              <NavLink to="/ui/about" className="NavUI-btn">
                About
              </NavLink>
              <NavLink className="NavUI-btn">Help</NavLink>
            </div>
          </div>
          <Box className="NavUI-btn" sx={{ flexGrow: 0 }}>
            <Tooltip>
              <Button
                onClick={() => {
                  handleOpenRequestBox();
                }}
              >
                <PeopleAltIcon className="Ui-requestBox"></PeopleAltIcon>
                <div style={{ color: "white" }}>
                  {requests &&
                    requests.filter((item) => item.receiver === user._id)
                      .length}
                </div>
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
                {loadingDot ? (
                  <Box className="commentloadinglogo">
                    <Box
                      component="img"
                      src="https://miro.medium.com/v2/resize:fit:978/0*cWpsf9D3g346Va20.gif"
                      width={150}
                    />
                  </Box>
                ) : (
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
                                  onClick={() =>
                                    acceptFriendRequestHandler(
                                      item.receiver._id
                                    )
                                  }
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
                )}
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, m: 0 }}>
                <Box>
                  <Box
                    src={
                      user.userprofile
                        ? user.userprofile
                        : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                    }
                    width={40}
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
                  <Typography>
                    {user && <Typography>{user.name}</Typography>}
                  </Typography>
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
        </Box>
      </nav>
    </div>
  );
}

import React, { useState } from "react";
import "./UiNavbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import axios from "axios";
import Menu from "@mui/material/Menu";

export default function UINavbar({
  users,
  requests,
  loadingDot,
  requestData,
  getRequestHandler,
  requestCancelHandler,
  requestDeleteHandler,
  sendFriendRequestHandler,
}) {
  const [timer, setTimer] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [friendRequest, setFriendRequest] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

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
          SOC<span style={{ color: "rgb(206, 49, 49)" }}>i</span>LMED
          <span style={{ color: "rgb(206, 49, 49)" }}>i</span>A
        </div>

        <div className="UiNav-btns">
          <div className="NavUI-btn">
            <NavLink to="/ui/home" className="NavUI-btn">
              Home
            </NavLink>
            <Box className="NavUI-btn" sx={{ flexGrow: 0 }}>
              <Tooltip>
                <Button
                  onClick={() => {
                    handleOpenRequestBox();
                  }}
                >
                  <PeopleAltIcon />
                  {requests &&
                    requests.filter((item) => item.receiver === user._id)
                      .length}
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
            <NavLink className="NavUI-btn">Contact</NavLink>
            <NavLink to="/ui/about" className="NavUI-btn">
              About
            </NavLink>
            <NavLink className="NavUI-btn">Help</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

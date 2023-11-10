import React, { useEffect, useState } from "react";
import "./Activity.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, Typography } from "@mui/material";
import axios from "axios";
const token = localStorage.getItem("token");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Activity({
  users,
  user,
  sendFriendRequestHandler,
  getAllRequestDataHandler,
  requests,
}) {
  const [details, setDetails] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [timer, setTimer] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //friendRequest Decline Handler
  const requestCancelHandler = (id) => {
    axios
      .delete(`http://localhost:6600/friendrequest/deleterequest/${id}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        getAllRequestDataHandler();
        console.log("request_Cancel_Successfully");
      })
      .catch((error) => {
        getAllRequestDataHandler();
        console.log(error);
      });
  };

  //timer for pending or cancel request button
  useEffect(() => {
    setTimeout(() => {
      setTimer(!timer);
    }, 1000);
  });

  //just for trying
  const [requestStatus, setRequestStatus] = useState([]);
  const getRequestHandler = (val) => {
    axios
      .get(`http://localhost:6600/friendrequest/requestlist/${val}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        console.log("requestData", result.data);
        setRequestStatus(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <Box>
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
                  <Typography className="userName">
                    <Typography>{value ? value.name : null}</Typography>
                  </Typography>
                </Box>

                {requests.some(
                  (item) =>
                    item.receiver === value._id && item.sender === user._id
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

        {/* ----------------------- */}
        <Box>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Users Details"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                here's you see users details and some prosonal informations.
                {details && (
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Box
                      component="img"
                      src={details ? details.userprofile : undefined}
                      width={100}
                      className="img"
                    />
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ opacity: "0.9" }}>ID</Typography> :{" "}
                        {details ? details._id : undefined}
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ opacity: "0.9" }}>Name</Typography> :{" "}
                        {details ? details.name : undefined}
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ opacity: "0.9" }}>Email</Typography> :{" "}
                        {details ? details.email : undefined}
                      </Box>
                      <Box sx={{ display: "flex", wordWrap: "break-word" }}>
                        <Typography sx={{ opacity: "0.9" }}>
                          Date of Birth
                        </Typography>{" "}
                        : {details ? details.dob : undefined}
                      </Box>
                      <Box sx={{ display: "flex", wordWrap: "break-word" }}>
                        <Typography sx={{ opacity: "0.9" }}>City</Typography> :{" "}
                        {details ? details.city : undefined}
                      </Box>
                    </Box>
                  </Box>
                )}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

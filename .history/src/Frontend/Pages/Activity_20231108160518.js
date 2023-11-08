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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Activity({ users, user, sendFriendRequestHandler }) {
  const [details, setDetails] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [requests, setRequests] = useState([]);
  const getAllRequestDataHandler = () => {
    axios
      .get("http://localhost:6600/friendrequest/allrequest")
      .then((result) => {
        setRequests(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [filteredList, setFilteredList] = useState();
  const filterRequestDataHandler = (receiver, sender) => {
    const updatedList = requests.some(
      (item) => item.receiver === receiver && item.sender === sender
    );
    setFilteredList(updatedList);
  };

  useEffect(() => {
    getAllRequestDataHandler();
    filterRequestDataHandler();
  }, []);

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
                {filteredList ? (
                  <Typography sx={{ mr: 1, opacity: "0.4" }}>
                    Pending
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={() => {
                      sendFriendRequestHandler(value._id);
                      filterRequestDataHandler();
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

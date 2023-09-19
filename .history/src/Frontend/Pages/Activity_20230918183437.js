import React, { useState } from "react";
import "./Activity.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./DialogBoxUsers.css";
import { Box, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Activity({ userData }) {
  const [details, setDetails] = useState([]);
  console.log("userDetails", details);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setValuesAndCall = () => {
    handleClickOpen();
  };
  return (
    <Box>
      <Box>
        {userData.map((value, i) => {
          return (
            <Box
              key={i}
              className="activityContainer"
              onClick={() => {
                setDetails(value);
                handleClickOpen();
              }}
            >
              <img src={value.userprofile} className="imgprofile" />
              <Typography className="userName">
                <Typography sx={{ fontWeight: "bold" }}>
                  {value.name.toUpperCase()}
                </Typography>
              </Typography>
            </Box>
          );
        })}
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
                  <Box sx={{display:"flex", }}>
                    <img
                      src={details.userprofile}
                      width={100}
                      className="img"
                    />
                    <Box>
                      <Box>
                        <Typography sx={{ opacity: "0.9" }}>Name</Typography> :{" "}
                        {details.name}
                      </Box>
                      <Box>
                        <Typography sx={{ opacity: "0.9" }}>Email</Typography> :{" "}
                        {details.email}
                      </Box>
                      <Box>
                        <Typography sx={{ opacity: "0.9" }}>
                          Password
                        </Typography>{" "}
                        : {details.password}
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

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
    <div>
      <div>
        {userData.map((value, i) => {
          return (
            <div
              key={i}
              className="activityContainer"
              onClick={() => {
                setDetails(value);
                handleClickOpen();
              }}
            >
              <img src={value.userprofile} className="imgprofile" />
              <span className="userName">
                <b>{value.name.toUpperCase()}</b>
              </span>
            </div>
          );
        })}
        <div>
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
                  <div className="userDetailsContainer">
                    <img
                      src={details.userprofile}
                      width={100}
                      className="img"
                    />
                    <div><span></span>: {details.name}</div>
                    <div>{details.email}</div>
                    <div>{details.password}</div>
                  </div>
                )}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

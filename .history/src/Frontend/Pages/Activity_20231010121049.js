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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Activity({ users }) {
  const [details, setDetails] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box>
        {users.map((value, i) => {
          return (
            <Box
              key={i}
              className="activityContainer"
              onClick={() => {
                setDetails(value);
                handleClickOpen();
              }}
            >
              <Box
                component="img"
                src={value.userId ? value.userId.userprofile : undefined}
                className="imgprofile"
              />
              <Typography className="userName">
                <Typography>
                  {value.userId ? value.userId.name : undefined}
                </Typography>
              </Typography>
            </Box>
          );
        })}
        {/* ---------------------------------------------------------------------------------- */}
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
                      src={
                        details.userId ? details.userId.userprofile : undefined
                      }
                      width={100}
                      className="img"
                    />
                    <Box className="onlinetag">sdfad</Box>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ opacity: "0.9" }}>Name</Typography> :{" "}
                        {details.userId ? details.userId.name : undefined}
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ opacity: "0.9" }}>Email</Typography> :{" "}
                        {details.userId ? details.userId.email : undefined}
                      </Box>
                      <Box sx={{ display: "flex", wordWrap: "break-word" }}>
                        <Typography sx={{ opacity: "0.9" }}>
                          Date of Birth
                        </Typography>{" "}
                        : {details.userId ? details.userId.name : undefined}
                      </Box>
                      <Box sx={{ display: "flex", wordWrap: "break-word" }}>
                        <Typography sx={{ opacity: "0.9" }}>City</Typography> :{" "}
                        {details.userId ? details.userId.city : undefined}
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

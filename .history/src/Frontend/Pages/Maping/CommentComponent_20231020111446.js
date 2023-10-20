import { Box, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentComponent({
  comments,
  commentDeleteHandler,
  setOpen,
  open,
  handleClickOpen,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ textAlign: "center" }}>{"Comments"}</DialogTitle>
        <DialogContent>
          {
            comments.length === 0 ? <Box> No have comments</Box> : <Box>{comments.map((value) => {
              return (
                <Box className="mainCommentBox" key={value._id}>
                  <Box className="commentBox">
                    <Box
                      component="img"
                      src={value ? value.userId.userprofile : null}
                      width={40}
                      className="profile"
                    />
                    &nbsp;&nbsp;
                    <Typography sx={{ opacity: "0.7", marginTop: "1vh" }}>
                      {value ? value.comment : null}
                    </Typography>
                  </Box>
                  {/* <Button
                  onClick={() => {
                    setEditButton(true);
                    setCommentBox(false);
                    setPostComment(value?.comment);
                  }}
                >
                  Edit
                </Button> */}
                  <Button onClick={() => commentDeleteHandler(value._id)}>
                    <DeleteIcon />
                  </Button>
                </Box>
              );
            })}</Box>
          }
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

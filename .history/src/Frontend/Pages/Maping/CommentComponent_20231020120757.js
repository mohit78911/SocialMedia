import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
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
  commentPostHandler,
  setPostComment,
  postComment,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {});
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
          <Box>
            <Box className="InputCommentBox">
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    commentPostHandler();
                  }
                }}
                placeholder="What's On Your Mind."
                className="InputComment"
                value={postComment}
                onChange={(e) => setPostComment(e.target.value)}
              />
              {/* {editButton ? (
              <Button onClick={() => editCommentHandler(value._id)}>
                Update
              </Button>
            ) : null} */}
              <Button
                classname="commentSubmitBtn"
                onClick={() => commentPostHandler()}
              >
                import <SendIcon/> ';
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogContent>
          {comments.length === 0 ? (
            <Box sx={{ textAlign: "center" }}>Oops, No Have Comments 😃</Box>
          ) : (
            <Box>
              <Typography>
                {comments.length > 0 ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Comments &nbsp;
                    <Box sx={{ color: "red", fontSize: "20px" }}>
                      {" "}
                      {comments.length}
                    </Box>{" "}
                  </Box>
                ) : null}
              </Typography>
              {comments.map((value) => {
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
                    <Button
                      onClick={() => {
                        commentDeleteHandler(value._id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>
                );
              })}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

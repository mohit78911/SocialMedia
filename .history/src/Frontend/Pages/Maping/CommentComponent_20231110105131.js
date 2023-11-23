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
import SendIcon from "@mui/icons-material/Send";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentComponent({
  comments,
  openComment,
  postComment,
  setPostComment,
  commentPostHandler,
  commentDeleteHandler,
  handleClickCloseComment,
}) {
  useEffect(() => {});
  return (
    <Box>
      <Dialog
        open={openComment}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickCloseComment}
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

              <Button
                className="commentSubmitBtn"
                onClick={() => {
                  commentPostHandler();
                }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogContent>
          {loadingDot ? (
            <Box
              component="img"
              src="https://miro.medium.com/v2/resize:fit:978/0*cWpsf9D3g346Va20.gif"
              width={250}
            /> :null }
          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClickCloseComment();
              setPostComment("");
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

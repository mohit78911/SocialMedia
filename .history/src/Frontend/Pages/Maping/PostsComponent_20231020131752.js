import { Box, Typography, Button } from "@mui/material";
import React from "react";
import CommentComponent from "./CommentComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";

export default function PostsComponent({
  post,
  comments,
  commentDeleteHandler,
  getCommentDataHandler,
  setCommentBox,
  commentPostHandler,
  setPostComment,
  postComment,
  setPostId,
  likedata,
  getLikeDataHandler,
}) {
  const [openComment, setOpenComment] = React.useState(false);
  const [openLikes, setOpen] = React.useState(false);

  const handleClickOpenComments = () => {
    setOpenComment(true);
  };

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box>
        {post.map((value, i) => {
          return (
            <Box key={i}>
              <Box className="userField">
                <Box className="topBar">
                  <Box
                    component="img"
                    src={value.userId ? value.userId.userprofile : undefined}
                    width={60}
                    className="profile"
                  />
                  <Box>
                    <Typography>
                      {value.userId ? value.userId.name : undefined}
                    </Typography>

                    <Typography style={{ opacity: "0.5" }}>
                      {value.userId ? value.userId.lastseen : undefined}
                    </Typography>
                  </Box>
                </Box>
                {/* posts with description */}
                <Box>
                  <Typography
                    sx={{ opacity: "0.7", marginTop: "1vh", margin: "15px" }}
                  >
                    {value ? value.description : null}
                  </Typography>
                </Box>
                <Box className="feedimg">
                  <Box
                    sx={{ cursor: "pointer" }}
                    component="img"
                    src={value ? value.image : null}
                    width={"100%"}
                  />
                </Box>
                {/* this is like & comment section */}
                <Box className="likebtnsContainer">
                  {/* <button
                      onClick={() => {
                        postLikeHandler(value._id);
                      }}
                    >
                      clickpost
                    </button> */}
                  <Button
                    onClick={() => {
                      // likeHandler(value._id);
                      getLikeDataHandler(value._id);
                    }}
                  >
                    {likedata.length}&nbsp;Likes
                  </Button>
                </Box>
                <Button
                  onClick={() => {
                    handleClickOpenComments();
                    getCommentDataHandler(value._id);
                    setCommentBox(true);
                    setPostId(value._id);
                  }}
                >
                  comments
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
      <CommentComponent
        setOpen={setOpen}
        openComment={openComment}
        comments={comments}
        commentDeleteHandler={commentDeleteHandler}
        commentPostHandler={commentPostHandler}
        setPostComment={setPostComment}
        postComment={postComment}
      />
      {/* ----------- dialog box ----------- */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ textAlign: "center" }}>{"Liked User's"}</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentComponent from "./CommentComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./PostComponent.css";
import LikeButtons from "./LikeButtons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  likeHandler,
  setLikeNumber,
  handleLike,
  handleUnlike,
  isLiked,
}) {
  const [openComment, setOpenComment] = React.useState(false);
  const [openLikes, setOpenLikes] = React.useState(false);

  const handleClickOpenComments = () => {
    setOpenComment(true);
  };

  const handleClickOpenLikes = () => {
    setOpenLikes(true);
  };

  const handleCloseLikes = () => {
    setOpenLikes(false);
  };

  const [likeId, setlikeId] = useState();

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
                  {/* <Button
                    onClick={() => {
                      likeHandler(value._id);
                    }}
                  >
                    likepost
                  </Button> */}
                  <LikeButtons
                    likeHandler={likeHandler}
                    isLiked={isLiked}
                    handleLike={handleLike}
                    handleUnlike={handleUnlike}
                    value={value}
                  />

                  <Button
                    onClick={() => {
                      // likeHandler(value._id);
                      getLikeDataHandler(value._id);
                      handleClickOpenLikes();
                    }}
                  >
                    Likes
                  </Button>
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
            </Box>
          );
        })}
      </Box>
      <CommentComponent
        setOpenComment={setOpenComment}
        openComment={openComment}
        comments={comments}
        commentDeleteHandler={commentDeleteHandler}
        commentPostHandler={commentPostHandler}
        setPostComment={setPostComment}
        postComment={postComment}
      />
      {/* ----------- dialog box for like ----------- */}
      <Dialog
        open={openLikes}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseLikes}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ textAlign: "center" }}>{"Liked User's"}</DialogTitle>
        <DialogContent>
          <Box>
            <Typography>
              {likedata.length > 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Total Likes &nbsp;
                  <Box sx={{ color: "red", fontSize: "20px" }}>
                    {" "}
                    {likedata.length}
                  </Box>{" "}
                </Box>
              ) : null}
            </Typography>
            {likedata.length === 0 ? (
              "Oops, No Likes Found 😃"
            ) : (
              <Box>
                {likedata.map((user) => {
                  return (
                    <Box>
                      <Box className="likesComponent">
                        <Box
                          onClick={() => setlikeId(user._id)}
                          component="img"
                          src={user.userId ? user.userId.userprofile : null}
                          className="userLikeImg"
                        />{" "}
                        &nbsp;
                        <Typography>
                          {user.userId ? user.userId.name : null}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLikes}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

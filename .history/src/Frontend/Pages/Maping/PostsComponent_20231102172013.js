import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentComponent from "./CommentComponent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./PostComponent.css";
import LikeButtons from "./LikeButtons";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostsComponent({
  post,
  comments,
  commentDeleteHandler,
  getCommentDataHandler,
  commentPostHandler,
  setPostComment,
  postComment,
  setPostId,
  likedata,
  getLikeDataHandler,
  user,
   
  allLikes,
  allComments,
  likesPostHandler,
  getAllCommentsDataHandler,
  handleClickOpenComments,
  handleClickOpenLikes,
  setOpenComment,
  openComment,
  openLikes,
  handleCloseLikes,
  handleClickCloseComment,
}) {
  return (
    <Box>
      <Box>
        {post.map((value, i) => {
          return (
            <Box key={i}>
              <Box className="userField">
                <Box className="topBar">
                  <Box
                    style={{ cursor: "pointer" }}
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
                  <Box
                    sx={{
                      cursor: "pointer",
                      opacity: "0.6",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      // likeHandler(value._id);
                      getLikeDataHandler(value._id);
                      handleClickOpenLikes();
                    }}
                  >
                    Likes&nbsp;
                    <Box style={{ color: "blue" }}>
                      {
                        allLikes.filter((item) => item.postId === value._id)
                          .length
                      }
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      cursor: "pointer",
                      opacity: "0.6",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      handleClickOpenComments();
                      getCommentDataHandler(value._id);
                      setPostId(value._id);
                      getAllCommentsDataHandler();
                    }}
                  >
                    Comments&nbsp;
                    <Box style={{ color: "blue" }}>
                      {
                        allComments.filter((val) => val.postId === value._id)
                          .length
                      }
                    </Box>
                  </Box>
                </Box>
                <LikeButtons
                  value={value}
                  user={user}
                
                  likesPostHandler={likesPostHandler}
                />
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
        handleClickCloseComment={handleClickCloseComment}
      />
      {/* ------ dialog box for like ------ */}
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
                    {likedata.length}
                  </Box>
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
                          component="img"
                          src={user.userId ? user.userId.userprofile : null}
                          className="userLikeImg"
                        />
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

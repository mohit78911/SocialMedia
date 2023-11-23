import { Box, Typography, Button } from "@mui/material";
import React from "react";
import CommentComponent from "./CommentComponent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./PostComponent.css";
import LikeButtons from "./LikeButtons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostsComponent({
  post,
  user,
  likedata,
  comments,
  setPostId,
  openLikes,
  loadingDot,
  openComment,
  allComments,
  postComment,
  setPostComment,
  likeUnlikeData,
  likesPostHandler,
  handleCloseLikes,
  commentPostHandler,
  getLikeDataHandler,
  handleClickOpenLikes,
  commentDeleteHandler,
  getCommentDataHandler,
  handleClickOpenComments,
  handleClickCloseComment,
  getAllCommentsDataHandler,
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
                        likeUnlikeData.filter(
                          (item) => item.postId === value._id
                        ).length
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
                  user={user}
                  value={value}
                  likesPostHandler={likesPostHandler}
                  likeUnlikeData={likeUnlikeData}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
      <CommentComponent
        comments={comments}
        openComment={openComment}
        postComment={postComment}
        setPostComment={setPostComment}
        commentPostHandler={commentPostHandler}
        commentDeleteHandler={commentDeleteHandler}
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
          {loadingDot ? (
            <Box
              component="img"
              src="https://miro.medium.com/v2/resize:fit:978/0*cWpsf9D3g346Va20.gif"
              width={250}
            />
          ) : (
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
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLikes}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

import React, { useEffect, useState } from "react";
import "./Feed.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Box, Button, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
// -----------------------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
// -----------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Feed({
  users,
  postDataHandling,
  description,
  setDescription,
  image,
  setImage,
  handleClickOpen,
  handleClose,
  open,
}) {
  const [inputData, setInputData] = useState("");
  const [commentBox, setCommentBox] = useState(false);
  const [likedata, setLikeData] = useState([]);
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");

  const toggleCommentBox = () => {
    setCommentBox(!commentBox);
  };

  //getting_post_data
  const [post, setPost] = useState([]);
  const getPostDataHandler = () => {
    axios
      .get("http://localhost:6600/post")
      .then((res) => {
        setPost(res.data);
        console.log("postdata", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get_like_data
  const getLikeDataHandler = () => {
    axios
      .get("http://localhost:6600/like", {
        headers: { authorization: token },
      })
      .then((result) => {
        setLikeData(result.data);
        // console.log("data", result.data);
        // console.log("dataid", result.data[0].userId._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get_comment_data
  const getCommentDataHandler = () => {
    axios
      .get("http://localhost:6600/comment", {
        headers: { authorization: token },
      })
      .then((result) => {
        setComments(result.data);
        // console.log("data", result.data);
        // console.log("dataid", result.data[0].userId._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //comment_posting_handler
  const [postId, setPostId] = useState();
  console.log("postid", postId);
  const [postComment, setPostComment] = useState("");

  const commentPostHandler = (e) => {
    e.preventDefault();
    let comments = {
      comment: postComment,
      userId: users._id,
      postId: postId._id,
    };
    axios
      .post("http://localhost:6600/comment/postcomment", comments)
      .then((res) => {
        getCommentDataHandler();
        // getLikeDataHandler();
        console.log("Comment Post Successfully!");
        toast.success("Comment Post Successfully!");
      })
      .catch((error) => {
        console.log(error);
        console.log("Comment Can't Post...");
        toast.error("Comment Can't Post...");
      });
  };

  //updating_likes
  const likeHandler = (val) => {
    const likedItem = likedata.find((item) => item._id === val);

    if (!likedItem) {
      console.log("Post Can't Be Liked: Please Provide a Valid ID");
      return;
    }
    const newLikeStatus = !likedItem.like;

    const likeData = {
      like: newLikeStatus,
      userId: users._id,
      // postId: post._id,
    };

    axios
      .put(`http://localhost:6600/like/update/${val}`, likeData)
      .then((res) => {
        getLikeDataHandler();
        console.log("Liked!", newLikeStatus);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Not Liked", { position: "top-right" });
      });
  };

  useEffect(() => {
    getPostDataHandler();
    getLikeDataHandler();
    getCommentDataHandler();
  }, []);

  const commentDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/comment/delete/${id}`)
      .then(() => {
        console.log(`commentDeleted ${id}`);
        getCommentDataHandler();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Box>
        <UploadComponent users={}/>
        <Box>
          {likedata.map((value, i) => {
            return (
              <Box key={i}>
                <Box className="userField">
                  {/* userInformation section */}
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
                  {/* post section */}
                  <Box>
                    <Typography
                      sx={{ opacity: "0.7", marginTop: "1vh", margin: "15px" }}
                    >
                      {value.postId ? value.postId.description : null}
                    </Typography>
                  </Box>
                  <Box className="feedimg">
                    <Box
                      sx={{ cursor: "pointer" }}
                      component="img"
                      src={value.postId ? value.postId.image : null}
                      width={"100%"}
                    />
                  </Box>
                  {/* like section */}
                  <Box className="likebtnsContainer">
                    <Button
                      onClick={() => {
                        likeHandler(value._id);
                      }}
                    >
                      {value.like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <Button onClick={toggleCommentBox}>Comments</Button>
                  </Box>
                  {/* comment section */}
                  <Box onClick={() => setPostId(value.postId)}>
                    {commentBox ? (
                      <Box>
                        {comments.map((value) => {
                          return (
                            <Box className="mainCommentBox" key={value._id}>
                              <Box className="commentBox">
                                <Box
                                  component="img"
                                  src={
                                    value ? value.userId.userprofile : undefined
                                  }
                                  width={40}
                                  className="profile"
                                />
                                &nbsp;&nbsp;
                                <Typography
                                  sx={{ opacity: "0.7", marginTop: "1vh" }}
                                >
                                  {value ? value.comment : undefined}
                                </Typography>
                              </Box>

                              <Button
                                onClick={() => commentDeleteHandler(value._id)}
                              >
                                <DeleteIcon />
                              </Button>
                            </Box>
                          );
                        })}
                      </Box>
                    ) : (
                      <Box className="InputCommentBox">
                        <input
                          placeholder="Comments, What's On Your Mind."
                          className="InputComment"
                          value={postComment}
                          onChange={(e) => setPostComment(e.target.value)}
                        />
                        <Button
                          classname="commentSubmitBtn"
                          onClick={commentPostHandler}
                        >
                          Submit
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* scroll bar */}
        <ToastContainer />
      </Box>
      <Box>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"ADD POST AND DESCRIPTION"}</DialogTitle>
          <DialogContent>
            <form onSubmit={postDataHandling} className="addpostdialog">
              <TextField
                className="m-1"
                label="DESCRIPTION"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                className="m-1 mt-2"
                label="IMAGE"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Button type="submit">Add Post</Button>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>CLOSE</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

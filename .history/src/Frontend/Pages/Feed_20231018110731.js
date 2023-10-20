import React, { useEffect, useState } from "react";
import "./Feed.css";
import UploadComponent from "./UploadComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { motion } from "framer-motion";

export default function Feed({ users, handleClickOpen, handleClose, open }) {
  const [commentBox, setCommentBox] = useState(false);
  const [likedata, setLikeData] = useState([]);
  const [comments, setComments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const token = localStorage.getItem("token");

  const toggleCommentBox = () => {
    setCommentBox(!commentBox);
  };

  const postDataHandling = (e) => {
    e.preventDefault();
    if (description === "") {
      toast.error("please fill description");
    } else if (image === "") {
      toast.error("please fill image section");
    } else {
      let newPostData = {
        description: description,
        image: image,
        userId: users._id,
      };
      axios
        .post("http://localhost:6600/post/post", newPostData)
        .then(() => {
          toast.success("Post Added Done!");
          // getPostDataHandler();
          console.log("Post Added Done.");
          getUsersDataHandlers();
          handleClose();
        })
        .catch((error) => {
          toast.error("data can't added...");
        });
    }
  };
  //get_user_data
  const getUsersDataHandlers = () => {
    axios
      .get("http://localhost:6600/user")
      .then((res) => {
        setAllUsers(res.data);
        console.log("allusers", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getting_post_data
  const [post, setPost] = useState([]);
  const getPostDataHandler = () => {
    axios
      .get("http://localhost:6600/post")
      .then((res) => {
        setPost(res.data);
        console.log("post_Data", res.data);
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
        console.log("like_length", likedata.like);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get_comment_data
  const getCommentDataHandler = (postId) => {
    axios
      .get(`http://localhost:6600/comment/${postId}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        setComments(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("commentskilength", comments.length);

  //comment_posting_handler
  const [postId, setPostId] = useState();
  console.log("postid", postId);
  const [postComment, setPostComment] = useState("");

  const commentPostHandler = () => {
    let comments = {
      comment: postComment,
      userId: users._id,
      postId: postId,
    };
    axios
      .post("http://localhost:6600/comment/postcomment", comments)
      .then((res) => {
        setCommentBox(true);
        setPostComment("");
        // getCommentDataHandler();
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
      // userId: users._id,
      postId: post._id,
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
    getUsersDataHandlers();
  }, []);

  //comment_delete_Handler
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

  useEffect(() => {
    if (comments && comments.length <= 0) {
      setCommentBox(false);
    }
  });

  return (
    <>
      <Box>
        <UploadComponent
          users={users}
          postDataHandling={postDataHandling}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
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
                  {/* like & Comment button section */}
                  <Box className="likebtnsContainer">
                    <Button
                      onClick={() => {
                        likeHandler(value._id);
                      }}
                    >
                      {value.like ? (
                        <motion.a
                          whileHover={{ scale: 1.4 }}
                          whileTap={{ scale: 0.7 }}
                        >
                          <FavoriteIcon />
                        </motion.a>
                      ) : (
                        <motion.a
                          whileHover={{ scale: 1.4 }}
                          whileTap={{ scale: 0.7 }}
                        >
                          <FavoriteBorderIcon />
                        </motion.a>
                      )}
                    </Button>
                    <Button onClick={() => toggleCommentBox()}>
                      toggleShow
                    </Button>
                    <Button
                      onClick={() => getCommentDataHandler(value.postId._id)}
                    >
                      {comments.length > 0 ? comments.length : null} comments
                    </Button>
                  </Box>
                  {/* comment section */}
                  <Box onClick={() => setPostId(value.postId._id)}>
                    {commentBox ? <Box>
                      {}
                    </Box> : <Box></Box>}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <ToastContainer />
      </Box>
    </>
  );
}

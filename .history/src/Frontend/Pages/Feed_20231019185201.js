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
import PostsComponent from "./Maping/PostsComponent";
import CommentComponent from "./Maping/CommentComponent";

export default function Feed({ users, handleClickOpen, handleClose, open }) {
  const [commentBox, setCommentBox] = useState(false);
  const [likedata, setLikeData] = useState([]);
  const [comments, setComments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [editButton, setEditButton] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [postComment, setPostComment] = useState("");
  const [postId, setPostId] = useState();
  const token = localStorage.getItem("token");

  //toggleCommentBox
  const toggleCommentBox = () => {
    setCommentBox(!commentBox);
  };

  //user_post_handler
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
  const getLikeDataHandler = (postid) => {
    axios
      .get(`http://localhost:6600/like/${postid}`, {
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
  // console.log("likedata", likedata);

  //get_comment_data
  const getCommentDataHandler = (val) => {
    axios
      .get(`http://localhost:6600/comment/${val}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        setComments(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //comment_posting_handler
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

  //useEffect function
  useEffect(() => {
    getPostDataHandler();
    getUsersDataHandlers();
  }, []);

  //comment_delete_Handler
  const commentDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/comment/delete/${id}`)
      .then(() => {
        console.log(`commentDeleted ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //useEffect function
  useEffect(() => {
    if (comments && comments.length <= 0) {
      setCommentBox(false);
    }
  });

  //posting_new_like_Data
  const postLikeHandler = (postid) => {
    const newLikeData = {
      like: true,
      userId: users._id,
      postId: postid,
    };
    axios
      .post(`http://localhost:6600/like/likepost`, newLikeData)
      .then((res) => {
        console.log("like_Post_Done.");
        // getLikeDataHandler();
        toast.success("like_post_done");
      })
      .catch((error) => {
        console.log("like_posting_error", error);
        toast.error("Like Post Not Done");
      });
  };

  //comment_edit_Handler
  const editCommentHandler = (val) => {
    const updatedData = {
      comment: postComment,
      userId: users._id,
      postId: postId,
    };
    axios
      .put(`http://localhost:6600/update/${val}`, updatedData)
      .then((res) => {
        console.log("UpdatedSuccessfully");
      })
      .catch((error) => {
        console.log(error, "Comment Can't Update");
      });
  };
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
          {post.map((value, i) => {
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
                  {/* like & Comment button section */}
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
                      {likedata.length}
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
                  </Box>
                  <Button onClick={() => toggleCommentBox()}>toggleShow</Button>
                  <Button
                    onClick={() => {
                      getCommentDataHandler(value._id);
                      setCommentBox(true);
                    }}
                  >
                    {comments.length > 0 ? comments.length : null} comments
                  </Button>
                  {/* comment section */}
                  <Box onClick={() => setPostId(value._id)}>
                    
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

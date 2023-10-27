import React, { useEffect, useState } from "react";
import "./Feed.css";
import UploadComponent from "./UploadComponent";

import { Box, Button, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import PostsComponent from "./Maping/PostsComponent";

export default function Feed({ user, handleClickOpen, handleClose, open }) {
  const [commentBox, setCommentBox] = useState(false);
  const [likedata, setLikeData] = useState([]);
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [postComment, setPostComment] = useState("");
  const [postId, setPostId] = useState();
  const token = localStorage.getItem("token");

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
        userId: user._id,
      };
      axios
        .post("http://localhost:6600/post/post", newPostData)
        .then(() => {
          toast.success("Post Added Done!");
          // getPostDataHandler();
          console.log("Post Added Done.");
          getPostDataHandler();
          handleClose();
        })
        .catch((error) => {
          toast.error("data can't added...");
        });
    }
  };

  //getting_post_data
  const [post, setPost] = useState([]);
  const getPostDataHandler = () => {
    axios
      .get("http://localhost:6600/post")
      .then((res) => {
        setPost(res.data);
        // console.log("post_Data", res.data);
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  // console.log("postId",postId)
  const commentPostHandler = () => {
    let comments = {
      comment: postComment,
      userId: user._id,
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
        getCommentDataHandler(postId);
      })
      .catch((error) => {
        console.log(error);
        console.log("Comment Can't Post...");
        toast.error("Comment Can't Post...");
      });
  };

  //useEffect function
  useEffect(() => {
    getPostDataHandler();
  }, []);

  //comment_delete_Handler

  const commentDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/comment/delete/${id}`)
      .then(() => {
        console.log(`commentDeleted ${id}`);
        getCommentDataHandler(postId);
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
  const [likenumber, setLikeNumber] = useState(1);
  // console.log("likenumber", likenumber);
  const postLikeHandler = (postid) => {
    const newLikeData = {
      // like: likenumber,
      userId: user._id,
      postId: postid,
    };
    axios
      .post(`http://localhost:6600/like/likepost`, newLikeData)
      .then((res) => {
        console.log("like_Post_Done.");
        // getLikeDataHandler();
        toast.success("like_post_done");
        // setLikeNumber(0);
      })
      .catch((error) => {
        console.log("like_posting_error", error);
        toast.error("Like Post Not Done");
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
      like: likenumber,
      // userId: user._id,
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

  const [isLiked, setIsLiked] = useState(false);
  const handleLike = async (postId) => {
    await axios
      .post("http://localhost:6600/like/likepost", {
        postId: postId,
        userId: user._id,
      })
      .then((res) => {
        console.log("like_done");
        setIsLiked(true);
        getPostDataHandler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUnlike = async (id) => {
    await axios.put(`http://localhost:6600/like/update/${id}`)
    .then((res))
      console.error(error);
    }
  };

  return (
    <>
      <Box>
        <UploadComponent
          user={user}
          postDataHandling={postDataHandling}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
        <PostsComponent
          post={post}
          comments={comments}
          commentDeleteHandler={commentDeleteHandler}
          getCommentDataHandler={getCommentDataHandler}
          setCommentBox={setCommentBox}
          commentPostHandler={commentPostHandler}
          setPostComment={setPostComment}
          postComment={postComment}
          setPostId={setPostId}
          likedata={likedata}
          getLikeDataHandler={getLikeDataHandler}
          likeHandler={likeHandler}
          setLikeNumber={setLikeNumber}
          postLikeHandler={postLikeHandler}
          handleLike={handleLike}
          // handleUnlike={handleUnlike}
          isLiked={isLiked}
        />

        <ToastContainer />
      </Box>
    </>
  );
}

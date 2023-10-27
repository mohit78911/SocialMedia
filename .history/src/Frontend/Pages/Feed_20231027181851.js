import React, { useEffect, useState } from "react";
import "./Feed.css";
import UploadComponent from "./UploadComponent";
import { Box, Button, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import PostsComponent from "./Maping/PostsComponent";

export default function Feed({ user, handleClickOpen, handleClose, open }) {
  const [likedata, setLikeData] = useState([]);
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [postComment, setPostComment] = useState("");
  const [postId, setPostId] = useState();
  const [post, setPost] = useState([]);
  const token = localStorage.getItem("token");

  //user_post_handler
  const postDataHandling = (e) => {
    e.preventDefault();
    if (description === "" || image === "") {
      toast.error("Field Must Required");
    } else {
      axios
        .post("http://localhost:6600/post/post", {
          description: description,
          image: image,
          userId: user._id,
        })
        .then(() => {
          toast.success("Post Added Done!");
          console.log("post_Added_Done");
          getPostDataHandler();
          handleClose();
        })
        .catch((error) => toast.error("Post_Can't_Added"));
    }
  };

  //getting_post_data
  const getPostDataHandler = () => {
    axios
      .get("http://localhost:6600/post")
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  };

  //get_like_data
  const getLikeDataHandler = (postid) => {
    axios
      .get(`http://localhost:6600/like/${postid}`, {
        headers: { authorization: token },
      })
      .then((result) => setLikeData(result.data))
      .catch((error) => console.log(error));
  };

  //get_comment_data
  const getCommentDataHandler = (val) => {
    axios
      .get(`http://localhost:6600/comment/${val}`, {
        headers: { authorization: token },
      })
      .then((result) => setComments(result.data))
      .catch((error) => console.log(error));
  };

  //comment_posting_handler
  const commentPostHandler = () => {
    let comments = {
      
    };
    axios
      .post("http://localhost:6600/comment/postcomment", comments)
      .then((res) => {
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

  const [isLiked, setIsLiked] = useState(false);
  const likePostHandler = (postid) => {
    const updatedLikeData = {
      userId: user._id,
      postId: postid,
    };
    axios
      .post(`http://localhost:6600/like/likepost/${postid}`, updatedLikeData)
      .then(() => {
        console.log("like_Done");
        getPostDataHandler();
        setIsLiked(true);
        toast.success(`${user.name}, You liked this Post`);
      })
      .catch((error) => {
        console.log("Post unlike Done", error);
        toast.success(`${user.name}, Post Unlike Done`);
      });
  };

  //useEffect_function
  useEffect(() => {
    getPostDataHandler();
  }, []);

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
          commentPostHandler={commentPostHandler}
          setPostComment={setPostComment}
          postComment={postComment}
          setPostId={setPostId}
          likedata={likedata}
          getLikeDataHandler={getLikeDataHandler}
          likePostHandler={likePostHandler}
          isLiked={isLiked}
        />
        <ToastContainer />
      </Box>
    </>
  );
}

import React, { useEffect, useState } from "react";
import "./Feed.css";
import UploadComponent from "./UploadComponent";
import { Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import PostsComponent from "./Maping/PostsComponent";

export default function Feed({ user, handleClickOpen, handleClose, open }) {
  const token = localStorage.getItem("token");
  const [likedata, setLikeData] = useState([]);
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [postComment, setPostComment] = useState("");
  const [postId, setPostId] = useState();
  const [post, setPost] = useState([]);
  const [openComment, setOpenComment] = React.useState(false);
  const [openLikes, setOpenLikes] = React.useState(false);
  const [allLikes, setAllLikes] = useState([]);
  const [allComments, setAllComments] = useState([]);

  //dialog box function for like and comments
  const handleClickOpenComments = () => {
    setOpenComment(true);
  };

  const handleClickCloseComment = () => {
    setOpenComment(false);
  };

  const handleClickOpenLikes = () => {
    setOpenLikes(true);
  };

  const handleCloseLikes = () => {
    setOpenLikes(false);
  };

  

  //user_post_handler
  const postDataHandling = (e) => {
    e.preventDefault();
    if (description.trim() === "" || image.trim() === "") {
      toast.error("Fields Must Required");
    } else {
      axios
        .post("http://localhost:6600/post/postuser", {
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
        .catch((error) => {
          toast.error("Post_Can't_Added");
        });
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
      .then((result) => {
        setComments(result.data);
      })
      .catch((error) => console.log(error));
  };

  //comment_posting_handler
  const commentPostHandler = () => {
    if (postComment.trim() === "") {
      toast.error("Comment Required for commenting...");
    } else {
      axios
        .post("http://localhost:6600/comment/postcomment", {
          comment: postComment,
          userId: user._id,
          postId: postId,
        })
        .then((res) => {
          setPostComment("");
          toast.success("Comment Post Successfully!");
          getCommentDataHandler(postId);
          handleClickCloseComment();
          getAllCommentsDataHandler();
        })
        .catch((error) => {
          getAllCommentsDataHandler();
          console.log(error);
          toast.error("Comment Can't Post...");
        });
    }
  };

  //comment_delete_Handler
  const commentDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/comment/delete/${id}`)
      .then(() => getCommentDataHandler(postId))
      .catch((error) => console.log(error));
  };

  //useEffect_function
  useEffect(() => {
    getPostDataHandler();
  }, []);

  //AllLikesData_Get_Function
  const getAllLikesData = (val) => {
    axios
      .get("http://localhost:6600/likesdata")
      .then((result) => {
        setAllLikes(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//AllComments_Get_Fucntion
  const getAllCommentsDataHandler = () => {
    axios
      .get("http://localhost:6600/datarouter/allcomments")
      .then((result) => {
        setAllComments(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //useEffect_for_getAllLikes && AllCommentsData Fucntion
  useEffect(() => {
    getAllLikesData();
    getAllCommentsDataHandler();
  }, []);


  //like_Post_Handler
  const likesPostHandler = (postid) => {
    axios
      .post(`http://localhost:6600/like/likepost/${postid}`, {
        userId: user._id,
        postId: postid,
      })
      .then(() => {
        getPostDataHandler();
        toast.success(`${user.name}, You liked this Post`);
        getAllLikesData();
        getLikesDataHandler();
      })
      .catch((error) => {
        getAllLikesData();
        getLikesDataHandler();
        toast.success(`${user.name}, Post Unlike Done`);
      });
  };

  //filtering data for like & unlike
  const [likeUnlikeData, setLikeUnlikeData] = useState([]);
  const [filterData, setFilterData] = useState();

  const getLikesDataHandler = (val) => {
    axios
      .get("http://localhost:6600/likesdata")
      .then((result) => {
        setLikeUnlikeData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const userLikedPost = likeUnlikeData.some(
      (item) => item.userId === user._id && item.postId === val
    );
    setFilterData(userLikedPost);
  };

  useEffect(() => {
    getLikesDataHandler();
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
          user={user}
          getPostDataHandler={getPostDataHandler}
          likesPostHandler={likesPostHandler}
          allComments={allComments}
          allLikes={allLikes}
          filterData={filterData}
          handleClickOpenComments={handleClickOpenComments}
          handleClickOpenLikes={handleClickOpenLikes}
          handleCloseLikes={handleCloseLikes}
          openComment={openComment}
          openLikes={openLikes}
        />
        <ToastContainer />
      </Box>
    </>
  );
}

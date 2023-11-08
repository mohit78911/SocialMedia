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

  //---------dialog box function for like and comments---------
  const handleClickOpenComments = () => {
    setOpenComment(true);
  };

  const handleClickCloseComment = () => {
    getAllCommentsDataHandler();
    setOpenComment(false);
  };

  const handleClickOpenLikes = () => {
    setOpenLikes(true);
  };

  const handleCloseLikes = () => {
    setOpenLikes(false);
  };

  //---------user_post_handler---------
  const postDataHandling = (e) => {
    // e.preventDefault();
    if (description.trim() === "" || image.trim() === "") {
      toast.error("Fields Must Required");
    } else {
      axios
        .post(
          "http://localhost:6600/post/postuser",
          {
            description: description,
            image: image,
            userId: user._id,
          },
          { headers: { authorization: token } }
        )
        .then(() => {
          toast.success("Post Added Done!");
          console.log("post_Added_Done");
          getPostDataHandler();
          handleClose();
          setImage("");
          setDescription("");
        })
        .catch((error) => {
          toast.error("Post_Can't_Added");
        });
    }
  };

  //---------getting_post_data---------
  const getPostDataHandler = () => {
    axios
      .get("http://localhost:6600/post", { headers: { authorization: token } })
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  };

  //---------get_like_data---------
  const getLikeDataHandler = (postid) => {
    axios
      .get(`http://localhost:6600/like/${postid}`, {
        headers: { authorization: token },
      })
      .then((result) => setLikeData(result.data))
      .catch((error) => console.log(error));
  };

  //---------get_comment_data---------
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

  //---------comment_posting_handler---------
  const commentPostHandler = () => {
    if (postComment.trim() === "") {
      toast.error("Comment Required for commenting...");
    } else {
      axios
        .post(
          "http://localhost:6600/comment/postcomment",
          {
            comment: postComment,
            userId: user._id,
            postId: postId,
          },
          { headers: { authorization: token } }
        )
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

  //---------comment_delete_Handler---------
  const commentDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/comment/delete/${id}`, {
        headers: { authorization: token },
      })
      .then(() => getCommentDataHandler(postId))
      .catch((error) => console.log(error));
  };

  //---------useEffect_function---------
  useEffect(() => {
    getPostDataHandler();
  }, []);

  //---------AllLikesData_Get_Function---------
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

  //---------AllComments_Get_Fucntion---------
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

  //---------useEffect_for_getAllLikes && AllCommentsData Fucntion---------
  useEffect(() => {
    getAllLikesData();
    getAllCommentsDataHandler();
  }, []);

  const [likeUnlikeData, setLikeUnlikeData] = useState([]);
  const getLikesDataHandler = () => {
    axios
      .get("http://localhost:6600/likesdata")
      .then((result) => {
        setLikeUnlikeData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLikesDataHandler();
  }, []);

  //---------like_Post_Handler---------
  const likesPostHandler = (postid) => {
    axios
      .post(
        `http://localhost:6600/like/likepost/${postid}`,
        {
          userId: user._id,
          postId: postid,
        },
        { headers: { authorization: token } }
      )
      .then(() => {
        getLikesDataHandler();
        getPostDataHandler();
        toast.success(`${user.name}, You liked this Post`);
        getAllLikesData();
      })
      .catch((error) => {
        getAllLikesData();

        toast.success(`${user.name}, Post Unlike Done`);
      });
  };

  return (
    <>
      <Box>
        <UploadComponent
          open={open}
          user={user}
          image={image}
          setImage={setImage}
          handleClose={handleClose}
          description={description}
          setDescription={setDescription}
          postDataHandling={postDataHandling}
          handleClickOpen={handleClickOpen}
        />
        <PostsComponent
          user={user}
          post={post}
          comments={comments}
          likedata={likedata}
          allLikes={allLikes}
          openLikes={openLikes}
          setPostId={setPostId}
          postComment={postComment}
          allComments={allComments}
          openComment={openComment}
          setPostComment={setPostComment}
          likesPostHandler={likesPostHandler}
          handleCloseLikes={handleCloseLikes}
          getLikeDataHandler={getLikeDataHandler}
          commentPostHandler={commentPostHandler}
          commentDeleteHandler={commentDeleteHandler}
          handleClickOpenLikes={handleClickOpenLikes}
          getCommentDataHandler={getCommentDataHandler}
          handleClickOpenComments={handleClickOpenComments}
          getAllCommentsDataHandler={getAllCommentsDataHandler}
          handleClickCloseComment={handleClickCloseComment}
        />
        <ToastContainer />
      </Box>
    </>
  );
}

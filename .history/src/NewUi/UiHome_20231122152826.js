import React, { useEffect, useState } from "react";
import "../Frontend/Pages/Feed.css";
import UploadComponent from "../Frontend/Pages/UploadComponent";
import { Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import PostsComponent from "../Frontend/Pages/Maping/PostsComponent";
 
 export default function UiHome() {
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
  const [allComments, setAllComments] = useState([]);
  const [loadingDot, setLoadingDot] = useState();
   return (
     <Box>
       
     </Box>
   )
 }
 
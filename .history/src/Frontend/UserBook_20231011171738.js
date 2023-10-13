import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function UserBook({ userData, like, setLike, likePost }) {
  const [users, setUsers] = useState([]);
  const [likedata, setLikeData] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [open, setOpen] = React.useState(false);

  const token = localStorage.getItem("token");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //get_logedin_user_data
  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUsers(result.data);
        console.log("resultuserdata", result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get_like_data
  const getLikeDataHandler = () => {
    axios
      .get("http://localhost:6600/like", {
        headers: { alg: "HS512", authorization: token },
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
  useEffect(() => {
    getUserDataHandler();
    getLikeDataHandler();
  }, []);

  //get_data_from_localStorage
  // const [userDetails, setUserDetails] = useState([]);
  // const getUserDataFromLocalStorage = () => {
  //   const user = localStorage.getItem("userDetails");
  //   const parseData = JSON.parse(user);
  //   console.log("user", parseData);
  //   setUserDetails(parseData);
  // };

  // useEffect(() => {
  //   getUserDataFromLocalStorage();
  // }, []);

  //adding_post_data
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
          handleClose();
        })
        .catch((error) => {
          toast.error("data can't added...");
        });
    }
  };

  //getting_post_data
  const getPostDataHandler =()=>{
    axios.get('')
  }

  //updating_likes
  const [postLike, setPostlike] = useState();
  const likeHandler = (val) => {
    const filterLikeID = likedata.filter((value) => value._id === val);
    const filterLikes = filterLikeID[0].like;

    console.log("like Post by this ID", users._id);

    if (filterLikeID.length) {
      if (filterLikes === true) {
        setPostlike(false);
      } else {
        setPostlike(true);
      }
    } else {
      console.log("Post Can't Like, Please Provide a Valid ID");
    }
    const likeData = {
      like: postLike,
      userId: users._id,
      postId: users._id,
      // likeuser: users._id,
    };
    axios
      .put(`http://localhost:6600/like/update/${val}`, likeData)
      .then((res) => {
        getLikeDataHandler();
        // console.log("Liked!", postLike);
      })
      .catch((error) => {
        console.log("error");
        toast.error("Not Liked", { position: "top-right" });
      });
  };

  //comment_posting_handler
  const [comment, setComment] = useState("");
  const commentPostHandler = (e) => {
    e.preventDefault();
    let comments = {
      comment: comments,
      userId: users._id,
      postId: users._id,
    };
    axios
      .post("http://localhost:6600/comment/postcomment", comments)
      .then((res) => {
        getLikeDataHandler();
        console.log("Comment Post Successfully!");
        toast.success("Comment Post Successfully!");
      })
      .catch((error) => {
        console.log(error);
        console.log("Comment Can't Post...");
        toast.error("Comment Can't Post...");
      });
  };

  return (
    <>
      <Navbar users={users} />
      <div className="mainAppClass">
        <div className="flex-container">
          <div className="one">
            <Details />
          </div>
          <div className="two">
            <Feed
              likeHandler={likeHandler}
              userData={userData}
              like={like}
              setlike={setLike}
              likePost={likePost}
              users={users}
              postDataHandling={postDataHandling}
              description={description}
              setDescription={setDescription}
              image={image}
              setImage={setImage}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              open={open}
              likedata={likedata}
              commentPostHandler={commentPostHandler}
              comment={comment}
              setComment={setComment}
            />
          </div>
          <div className="three">
            <Activity users={likedata} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserBook;

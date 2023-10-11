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

  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUsers(result.data);
        // console.log("resultuserdata", result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const [userDetails, setUserDetails] = useState([]);
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const parseData = JSON.parse(user);
    console.log("user", parseData);
    setUserDetails(parseData);
  };

  // console.log("userid", userDetails._id);

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);
  
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
        userId: userDetails._id,
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

  //updating_likes
  const [postLike, setPostlike] = useState();
  const likeHandler = (val) => {
    const filterLikeID = likedata.filter((value) => value._id === val);
    const filterLikes = filterLikeID[0].like;

    console.log("likedata", filterLikes);

    if (filterLikeID.length) {
      if (filterLikes === true) {
        setPostlike(false);
      } else {
        setPostlike(true);
      }
    } else {
      console.log("id nhi mili!");
    }
    const likeData = {
      like: postLike,
      // userId: likedata.userId._id,
      // postId: likedata.postId._id,
    };
    axios
      .put(`http://localhost:6600/like/update/${val}`, likeData)
      .then((res) => {
        getLikeDataHandler();
        console.log("Liked!", postLike);
        toast.success("liked", { position: "top-right" });
      })
      .catch((error) => {
        console.log("error");
        toast.error("Not Liked", { position: "top-right" });
      });
  };

  return (
    <div className="mainAppClass">
      <Navbar users={users} />
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
          />
        </div>
        <div className="three">
          <Activity users={likedata} />
        </div>
      </div>
    </div>
  );
}

export default UserBook;
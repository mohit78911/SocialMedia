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
        console.log(result.data);
        console.log("Response", token.Response);
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
        console.log(result.data);
        console.log("Response", token.Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDataHandler();
    getLikeDataHandler();
    localStorage.setItem("usersdata", getLikeDataHandler);
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
      };
      axios
        .post("http://localhost:6600/post/post", newPostData)
        .then(() => {
          toast.success("data added done!");
          // getPostDataHandler();
          handleClose();
        })
        .catch((error) => {
          toast.error("data can't added...");
        });
    }
  };
  return (
    <div className="App">
      <Navbar users={users} />
      <div className="flex-container">
        <div className="one">
          <Details />
        </div>
        <div className="two">
          <Feed
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

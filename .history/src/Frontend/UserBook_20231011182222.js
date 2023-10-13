import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function UserBook({ userData, like, setLike, likePost }) {

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

  return (
     
      <div className="mainAppClass">
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
            />
          </div>
          <div className="three">
            <Activity />
          </div>
        </div>
      </div>
   
  );
}

export default UserBook;

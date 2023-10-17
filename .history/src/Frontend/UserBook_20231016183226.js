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
        // console.log("resultuserdata", result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDataHandler();
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

import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function UserBook({ userData, like, setLike, likePost }) {
  const [user, setUser] = useState([]);
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
        setUser(result.data);
        // console.log("resultuserdata", result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get_all_users
  const getAllUserDetailsHandler = () => {
    axios
      .get("http://localhost:6600/user")
      .then((res) => {
        // console.log("allUsersData", res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDataHandler();
    getAllUserDetailsHandler();
  }, []);

  return (
    <div className="mainAppClass">
      <Navbar user={user} />
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
            user={user}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
          />
        </div>
        <div className="three">
          <Activity users={users} />
        </div>
      </div>
    </div>
  );
}

export default UserBook;

import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {motion} from "framer-motion"

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
        console.log(error, "user_Can't_Find");
      });
  };

  useEffect(() => {
    getUserDataHandler();
    getAllUserDetailsHandler();
  }, []);


  //animation
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return (
    <div className="mainAppClass">
        <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
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

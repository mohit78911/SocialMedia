import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {AnimatePresence, motion} from "framer-motion"

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
  const [selectedId, setSelectedId] = useState(null)
  

  return (
    <div className="mainAppClass">
       <AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>
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

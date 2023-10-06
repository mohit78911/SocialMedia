import React,{useEffect} from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";

function UserBook({ userData, like, setLike, likePost }) {
  const token = localStorage.getItem("token");
  const getPostDataHandler = () => {
    axios
      .get("http://localhost:6600/users", { headers: { authorization: token } })
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPostDataHandler();
  }, []);
  return (
    <div className="App">
      <Navbar />
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
          />
        </div>
        <div className="three">
          <Activity userData={userData} />
        </div>
      </div>
    </div>
  );
}

export default UserBook;

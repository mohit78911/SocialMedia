import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function LikeButtons({
  isLiked,
  value,
  likePostHandler,
  setIsLiked,
  user,
  getPostDataHandler,
}) {
  const [likeData, setLikeData] = useState([]);
  const getLikesDataHandler = () => {
    axios
      .get(`http://localhost:6600/likes`)
      .then((result) => {
        setLikeData(result.data);
        // console.log("consoleLikeData", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getLikesDataHandler();
  }, []);

  const [filterData, setFilterData] = useState();
  const filterDataHandler = ()=>{
    const userHasLikedPost = likeData.some(
      (item) => item.userId === user._id && item.postId === value._id
    );
    setFilterData(userHasLikedPost);
  }
  useEffect(() => {
    
  });

  return (
    <Box>
      <Box>
        {filterData ? (
          <Button
            onClick={() => {
              likePostHandler(value._id);
              setIsLiked((prevIsLiked) => ({
                ...prevIsLiked,
                [value._id]: false,
              }));
              getLikesDataHandler();
            }}
          >
            Unlike
          </Button>
        ) : (
          <Button
            onClick={() => {
              likePostHandler(value._id);
              setIsLiked((prevIsLiked) => ({
                ...prevIsLiked,
                [value._id]: true,
              }));
              getLikesDataHandler();
            }}
          >
            Like
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default LikeButtons;

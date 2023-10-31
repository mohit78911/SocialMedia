import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

function LikeButtons({
  isLiked,
  value,
  likePostHandler,
  setIsLiked,
  user,
  getLikesDataHandler,
  likes,
}) {
  const [likeData, setLikeData] = useState([]);
  // const getLikesDataHandler = () => {
  //   axios
  //     .get(`http://localhost:6600/likes`)
  //     .then((result) => {
  //       setLikeData(result.data);
  //       console.log("consoleLikeData", result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   getLikesDataHandler();
  // }, []);

  useEffect(() => {
    getLikesDataHandler(value._id);
  }, []);

  // const filterLikeData = likeData.find((item) => item.postId);
  // console.log("filterLikeData", filterLikeData);
  return (
    <Box>
      <Box>
        <Typography>like {likes.length}</Typography>
        <Box>
          {isLiked[value._id] ? (
            <Button
              onClick={() => {
                likePostHandler(value._id);
                setIsLiked((prevIsLiked) => ({
                  ...prevIsLiked,
                  [value._id]: false,
                }));
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
              }}
            >
              Like
            </Button>
          )}
          {/* {isLiked[value._id] ? (
            <Button
              onClick={() => {
                likePostHandler(value._id);
                setIsLiked((prevIsLiked) => ({
                  ...prevIsLiked,
                  [value._id]: false,
                }));
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
              }}
            >
              Like
            </Button>
          )} */}
        </Box>
      </Box>
    </Box>
  );
}

export default LikeButtons;

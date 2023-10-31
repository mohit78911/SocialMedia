import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

function LikeButtons({ isLiked, value, likePostHandler, setIsLiked, user }) {
  const [likeData, setLikeData] = useState([]);
  const getLikesDataHandler = () => {
    axios
      .get(`http://localhost:6600/likes`)
      .then((result) => {
        setLikeData(result);
        console.log("consoleLikeData", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    document.addEventListener("click", () => {
      getLikesDataHandler();
    });
    // getLikesDataHandler();
  }, []);
  console.log("allLikesData", likeData);
  return (
    <Box>
      <Box>
        <Box>
          {/* {likeData.userId === value._id ? (
            <Button
              onClick={() => {
                likePostHandler(value._id);
                // setIsLiked(false);
              }}
            >
              Unlike
            </Button>
          ) : (
            <Button
              onClick={() => {
                likePostHandler(value._id);
                // setIsLiked((prevIsLiked) => ({
                //   ...prevIsLiked,
                //   [value._id]: true,
                // }));
              }}
            >
              Like
            </Button>
          )} */}
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
        </Box>
      </Box>
    </Box>
  );
}

export default LikeButtons;

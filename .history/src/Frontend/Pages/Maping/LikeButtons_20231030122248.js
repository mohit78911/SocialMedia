import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function LikeButtons({ isLiked, value, likePostHandler, setIsLiked }) {

  const getLikesDataHandler = ()=>{
    axios.get(`http://localhost:6600/likes`)
    .then((result)=>{
      console.log(result.data)
    })
  }
  return (
    <Box>
      <Box>
        <Box>
          {}
          {isLiked[value._id] ? (
            <Button
              onClick={() => {
                likePostHandler(value._id);
                setIsLiked(false);
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

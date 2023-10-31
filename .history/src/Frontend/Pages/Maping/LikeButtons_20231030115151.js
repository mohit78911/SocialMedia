import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function LikeButtons({ isLiked, value, likePostHandler,setIsLiked }) {
  return (
    <Box>
      <Box>
        <Box>
          {isLiked[value._id] ? (
if(like > 0)
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

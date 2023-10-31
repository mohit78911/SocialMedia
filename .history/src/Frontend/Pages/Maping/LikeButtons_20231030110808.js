import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function LikeButtons({ isLiked, value, likePostHandler }) {
  return (
    <Box>
      <Box>
        <Box>
          {isLiked ? (
          <Button
            onClick={() => {
              likePostHandler(value._id);
            }}
          >
            Unlike
          </Button>
           ) : ( 
          <Button
            onClick={() => {
              likePostHandler(value._id);
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

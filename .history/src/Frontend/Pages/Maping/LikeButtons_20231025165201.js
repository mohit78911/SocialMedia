import { Box, Button } from "@mui/material";

import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function LikeButtons({
  isLiked,
  handleUnlike,
  handleLike,
  value,
  likeHandler,
}) {

    const likeData = ()=>{
        axios
    }
  return (
    <Box>
      <Box>
        {isLiked ? (
          <Button
            onClick={() => {
              likeHandler();
              //handleUnlike(value.id);
            }}
          >
            <FavoriteIcon />
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleLike(value._id);
            }}
          >
            <FavoriteBorderIcon />
          </Button>
        )}
      </Box>
    </Box>
  );
}

import { Box, Button } from "@mui/material";

import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function LikeButtons({
  isLiked,
  handleUnlike,
  handleLike,
  value,
}) {
  return (
    <Box>
      <Box>
        {isLiked ? (
          <Button
            onClick={() => {
              handleUnlike(value.id);
            }}
          >
            <FavoriteBorderIcon />
            
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleLike(value._id);
            }}
          >
            <FavoriteIcon />
          </Button>
        )}
      </Box>
    </Box>
  );
}

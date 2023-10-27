import { Box, Button, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

export default function LikeButtons({
  isLiked,
  value,
  likeHandler,
  likePostHandler,
  unlikePostHandler,
}) {
  return (
    <Box>
      <Box>
        <Box>
          {isLiked ? (
            <Button
              onClick={() => {
                unlikePostHandler(value._id);
              }}
            >
              <FavoriteIcon />
            </Button>
          ) : (
            <Button
              onClick={() => {
                likePostHandler(value._id);
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

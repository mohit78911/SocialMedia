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
  deleteLikeHandler,
}) {
  return (
    <Box>
      <Box>
        <Box>
          {/* {isLiked ? ( */}
          <Button
            onClick={() => {
              deleteLikeHandler(value._id);
            }}
          >
            Unlike
          </Button>
          {/* ) : ( */}
          <Button
            onClick={() => {
              likePostHandler(value._id);
            }}
          >
            Like
          </Button>
          {/* )}  */}
        </Box>
      </Box>
    </Box>
  );
}

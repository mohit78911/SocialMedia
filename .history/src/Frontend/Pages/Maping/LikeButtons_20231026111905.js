import { Box, Button, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

export default function LikeButtons({
  isLiked,
  value,
  likeHandler,
  likePostHandler
}) {
  return (
    <Box>
      <Box>
        <Box>
          <Button onClick={()=>{likePostHandler(value._id)}}><FavoriteIcon</Button>
        </Box>
      </Box>
    </Box>
  );
}
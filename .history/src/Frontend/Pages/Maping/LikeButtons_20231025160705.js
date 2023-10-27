import { Box } from "@mui/material";
import React from "react";

export default function LikeButtons({ isLiked, handleUnlike, handleLike }) {
  return (
    <Box>
      <Box>
        {isLiked ? (
          <Button
            onClick={() => {
              handleUnlike(value.id);
            }}
          >
            Unlike
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleLike(value._id);
            }}
          >
            Like
          </Button>
        )}
      </Box>
    </Box>
  );
}

import { Box, Button, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

export default function LikeButtons({
  isLiked,
  handleUnlike,
  handleLike,
  value,
  likeHandler,
}) {
  const [allLikesData, setAllLikesData] = useState([]);
  const likeData = () => {
    axios
      .get(`http://localhost:6600/like/alllikesdata`)
      .then((result) => {
        console.log("allLikesData", result.data);
        setAllLikesData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    likeData();
  }, []);
  return (
    <Box>
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
    </Box>
  );
}

import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

function LikeButtons({ isLiked, value, likePostHandler, user }) {
  const [likeData, setLikeData] = useState([]);

  const getLikesDataHandler = () => {
    axios
      .get(`http://localhost:6600/likes`)
      .then((result) => {
        setLikeData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [filterData, setFilterData] = useState();
  useEffect(() => {
    getLikesDataHandler();
    
    setFilterData(userHasLiked);
  }, []);

  return (
    <Box>
      <Box>
        <Box>
          {filterData ? (
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
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default LikeButtons;

import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function LikeButtons({ isLiked, value, likePostHandler, setIsLiked, user }) {
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    const getLikesDataHandler = () => {
      axios
        .get(`http://localhost:6600/likes`)
        .then((result) => {
          setLikeData(result.data);
          // console.log("consoleLikeData", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const userHasLikedPost = likeData.some(
    (item) => item.userId === user.id && item.postId === value._id
  );

  return (
    <Box>
      <Box>
        {userHasLikedPost ? (
          <Button
            onClick={() => {
              likePostHandler(value._id);
              setIsLiked((prevIsLiked) => ({
                ...prevIsLiked,
                [value._id]: false,
              }));
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
  );
}

export default LikeButtons;

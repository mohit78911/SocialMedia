import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function LikeButtons({ isLiked, value, likePostHandler, setIsLiked, user }) {
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    // Fetch like data for the post here or pass it as a prop.
    // For example, you can call a function to fetch the like data for the post.
    // For now, we'll assume that likeData is passed as a prop.

    // Sample data format:
    // const likeData = [
    //   { userId: "user1", postId: "post1" },
    //   { userId: "user2", postId: "post2" },
    //   // ...
    // ];

    // Simulate fetching like data.
    setLikeData(likeData);
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

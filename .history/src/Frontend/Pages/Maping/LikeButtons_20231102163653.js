import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ToastContainer, toast } from "react-toastify";

function LikeButtons({ value, user,likesPostHandler,filterData }) {
 

  return (
    <Box>
      <Box>
        {filterData ? (
          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.6 }}
              style={{ color: "rgb(190, 30, 30)" }}
              onClick={() => {
                likesPostHandler(value._id);
                 
              }}
            >
              <FavoriteIcon />
              Unlike
            </motion.a>
          </Button>
        ) : (
          <Button>
            <motion.a
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.7 }}
              style={{ color: "skyblue" }}
              onClick={() => {
                likesPostHandler(value._id);
                 
              }}
            >
              <FavoriteBorderIcon />
              Like
            </motion.a>
          </Button>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default LikeButtons;

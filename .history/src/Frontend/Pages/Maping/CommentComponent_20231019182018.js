import { Box, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "bootstrap";

export default function CommentComponent({ comments, commentDeleteHandler }) {
  return (
    <Box>
      <Button
        onClick={() => {
          getCommentDataHandler(value._id);
          setCommentBox(true);
        }}
      >
        {comments.length > 0 ? comments.length : null} comments
      </Button>
      <Box>
        {comments.map((value) => {
          return (
            <Box className="mainCommentBox" key={value._id}>
              <Box className="commentBox">
                <Box
                  component="img"
                  src={value ? value.userId.userprofile : null}
                  width={40}
                  className="profile"
                />
                &nbsp;&nbsp;
                <Typography sx={{ opacity: "0.7", marginTop: "1vh" }}>
                  {value ? value.comment : null}
                </Typography>
              </Box>
              {/* <Button
                onClick={() => {
                  setEditButton(true);
                  setCommentBox(false);
                  setPostComment(value?.comment);
                }}
              >
                Edit
              </Button> */}
              <Button onClick={() => commentDeleteHandler(value._id)}>
                <DeleteIcon />
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

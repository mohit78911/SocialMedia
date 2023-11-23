import { Box, Typography } from "@mui/material";
import React from "react";

function UiFriends({ friends }) {
  return (
    <div>
      <div>
        <Box className="Ui-friendsList">
          {friends.map((friend) => {
            return (
              <Box className="friendlistbox">
                <Box
                  component="img"
                  className="friendlistimg"
                  src={friend ? friend.friendId.userprofile : null}
                />
                &nbsp;
                <Typography>{friend ? friend.friendId.name : null}</Typography>
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
}

export default UiFriends;

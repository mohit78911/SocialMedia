import { Box, Typography } from "@mui/material";
import React from "react";
import "./UiFriends.css"

function UiFriends({ friends }) {
  return (
    <div className="ui-Friends">
        {}
        <Typography sx={{textAlign:"center"}}>FRIENDS LIST</Typography>
      <div className="Ui-friendsComponent">
        <Box className="Ui-friendsList">
          {friends.map((friend) => {
            return (
              <Box className="Ui-friendsAlign">
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

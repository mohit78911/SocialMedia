import React from "react";

function UiFriends({friends}) {
  return (
    <div>
      <div> <Box className="friendsitem">
              {friends.map((friend) => {
                return (
                  <Box className="friendlistbox" variants={itemVariants}>
                    <Box
                      component="img"
                      className="friendlistimg"
                      src={friend ? friend.friendId.userprofile : null}
                    />
                    &nbsp;
                    <Typography>
                      {friend ? friend.friendId.name : null}
                    </Typography>
                  </Box>
                );
              })}
            </Box></div>
    </div>
  );
}

export default UiFriends;

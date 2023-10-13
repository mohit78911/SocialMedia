import { Box } from '@mui/material'
import React from 'react'
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function UploadComponent({users}) {
  return (
    <Box className="postfeed">
    <Box className="iconpen">
      <BorderColorIcon />
      <Typography style={{ opacity: "0.5", fontSize: "15px" }}>
        Create Post
      </Typography>
    </Box>
    <Box className="inputBox">
      <Box>
        <Box
          component="img"
          src={
            users.userprofile
              ? users.userprofile
              : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
          width={50}
          className="image"
        />
      </Box>

      <input
        placeholder="What's on your mind?"
        className="input"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
    </Box>
    <Box className="ActivityButtons">
      <Box className="centerActivityBtn">
        <Button
          className="activitybtn"
          onClick={() => alert("live Videos")}
        >
          <LiveTvIcon />
          <Typography className="uploadbtn">LiveVideo</Typography>
        </Button>
        <Button
          className="activitybtn"
          onClick={() => alert("hello Photos and Videos")}
        >
          <PhotoSizeSelectActualIcon />
          <Typography className="uploadbtn">Photos/Videos</Typography>
        </Button>
        <Button
          className="activitybtn"
          onClick={() => alert("hello activity and feelings")}
        >
          <CameraAltIcon />
          <Typography className="uploadbtn">Feelings/Activity</Typography>
        </Button>
        <Button className="activitybtn" onClick={handleClickOpen}>
          <CameraAltIcon />
          <Typography className="uploadbtn">AddPost</Typography>
        </Button>
      </Box>
    </Box>
  </Box>
  )
}

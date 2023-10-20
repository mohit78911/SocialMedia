import { Box } from '@mui/material'
import React from 'react'

export default function PostsComponent() {
  return (
    <Box>
      <Box>
      {post.map((value, i) => {
            return (
              <Box key={i}>
                <Box className="userField">
                  {/* userInformation section */}
                  <Box className="topBar">
                    <Box
                      component="img"
                      src={value.userId ? value.userId.userprofile : undefined}
                      width={60}
                      className="profile"
                    />
                    <Box>
                      <Typography>
                        {value.userId ? value.userId.name : undefined}
                      </Typography>

                      <Typography style={{ opacity: "0.5" }}>
                        {value.userId ? value.userId.lastseen : undefined}
                      </Typography>
                    </Box>
                  </Box>
                  {/* post section */}
                  <Box>
                    <Typography
                      sx={{ opacity: "0.7", marginTop: "1vh", margin: "15px" }}
                    >
                      {value ? value.description : null}
                    </Typography>
                  </Box>
                  <Box className="feedimg">
                    <Box
                      sx={{ cursor: "pointer" }}
                      component="img"
                      src={value ? value.image : null}
                      width={"100%"}
                    />
                  </Box>
      </Box>
    </Box>
  )
}

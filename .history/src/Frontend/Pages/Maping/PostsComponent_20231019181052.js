import { Box } from '@mui/material'
import React from 'react'

export default function PostsComponent({post}) {
  return (
    <Box>
      <Box>
      {post.map((value, i) => {
            return (
              <Box key={i}>
                <Box className="userField">
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
                </Box>
              </Box>
            )})}
              
      </Box>
    </Box>
  )
}

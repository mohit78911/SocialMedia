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
                </Box>
                </Box>
              </Box>
            )})}
              
      </Box>
    </Box>
  )
}

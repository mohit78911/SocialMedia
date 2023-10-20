import { Box } from '@mui/material'
import React from 'react'

export default function PostsComponent({post}) {
  return (
    <Box>
      <Box>
      {post.map((value, i) => {
            return (
              <Box key={i}>
                
              </Box>
            )})}
              
      </Box>
    </Box>
  )
}

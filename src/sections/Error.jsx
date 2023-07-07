import { Box, Typography } from '@mui/material'
import React from 'react'

const Error = () => {
  return (
   <Box sx={{
    marginTop: 20,
   }}>
    <Typography variant="h4">
        Something went wrong!
    </Typography>
   </Box>
  )
}

export default Error
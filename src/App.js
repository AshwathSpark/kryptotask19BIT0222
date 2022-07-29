import React from 'react'
import { Box } from '@mui/material'

function App() {
  return (
    <>
   
<div style={{display:"flex",justifyContent:"center"}}>
   <Box
      sx={{
        width: 400,
        height: 400,
        backgroundColor: '#FEFEFE',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >

      hellu

      </Box>

      </div>


    </>
  )
}

export default App
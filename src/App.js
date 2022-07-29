import React from 'react'
import { Box } from '@mui/material'
import './App.css'

function App() {
  return (
    <>
   
<div style={{display:"flex",justifyContent:"center"}}>
   <Box className='loginBox'
      sx={{
        width: 450,
        height: 350,
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
import React from 'react'
import { Box, Link } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import Grid from '@mui/material/Grid';
// import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#087cec',
      contrastText: '#fff',
    },
  },
});
function App() {
  return (
    <>
   
<div style={{display:"flex",justifyContent:"center"}}>
   <Box className='loginBox'
      sx={{
        width: 450,
        height: 350,
        backgroundColor: '#FEFEFE'
      }}
    >
<ThemeProvider theme={theme}>
<div>
  <form className='form'>
    <div className='login'>
        <p className='loginHead'>Login</p>
    </div>
      <input type="email" placeholder="Email Address"/>
      <input type="password" placeholder="Password"/>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Link href="#" underline="none" color="#087cec" fontSize={'18px'}>
          {'New user? Create an account'}
        </Link>
        </Grid>
        <Grid item xs={6} class="button">
          {/* <Button variant="contained" color="neutral" >Login</Button> */}
          <input type="button" value="Login"/>
        </Grid>
    </Grid>
  </form>


</div>
</ThemeProvider>
      </Box>

      </div>


    </>
  )
}

export default App
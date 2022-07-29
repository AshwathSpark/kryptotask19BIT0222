import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { TableCell,TableRow,TableContainer,Table,TableHead } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Cart() {

    const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>

          <Typography variant="h5" component="div" gutterBottom>
        My Cart
      </Typography>

      <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          ₹200
          </Typography>
          
        </CardContent>
        
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton>
            <AddOutlinedIcon/>
          </IconButton>
          <IconButton aria-label="play/pause">
            1
          </IconButton>
          <IconButton>
            <RemoveOutlinedIcon/>
          </IconButton>
        </Box>
      </Box>
      <IconButton style={{color:"red"}}>
            <CancelOutlinedIcon/>
          </IconButton>
      
    </Card>

    <Card sx={{ display: 'flex' }}>
    <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          ₹100
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton>
            <AddOutlinedIcon/>
          </IconButton>
          <IconButton >
            1
          </IconButton>
          <IconButton>
            <RemoveOutlinedIcon/>
          </IconButton>
        </Box>
      </Box>

      <IconButton style={{color:"red"}}>
            <CancelOutlinedIcon/>
          </IconButton>
     
    </Card>

    


          </Item>
          <Button variant="contained">Contained</Button>
        </Grid>
        <Grid item xs={4}>
          <Item>

          <Typography variant="h5" component="div" gutterBottom>
        Price Details
      </Typography>

      <TableContainer >

      <Table  >
      <TableHead>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell align='right' >284</TableCell>
           
          </TableRow>
          <TableRow>
            <TableCell>Discount Price</TableCell>
            <TableCell align='right'>284</TableCell>
           
          </TableRow>
          <TableRow>
            <TableCell>Delivery Charge</TableCell>
            <TableCell align='right'>284</TableCell>
           
          </TableRow>
       
          <TableRow>
            <TableCell><h2>Total</h2></TableCell>
            <TableCell align='right'><h2>284</h2></TableCell>
           
          </TableRow>
        </TableHead>

        </Table>
      </TableContainer>



          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}

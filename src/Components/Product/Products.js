import React from 'react'
import { useEffect,useState } from 'react';
import { CardMedia,CardContent,Typography,CardActions,Button,Card,Grid } from '@mui/material';
import {Chip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Cart() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    const url = "http://localhost:5000/products";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setproducts(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);


  return (
    <div>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{products.map((product) => (
  <>
       

       

    <Grid xs={2} sm={3} md={3} >
    <Card sx={{ maxWidth: 300 }} style={{margin:"5%"}}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹{product.amount}
        </Typography>
        <Typography>
        <Chip label={product.rating} size="small" style={{backgroundColor:"#0EAF0D",color:"white"}} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><FavoriteIcon/></Button>
        <Button size="small"><AddShoppingCartIcon/></Button>
      </CardActions>
    </Card>
    </Grid>


        </>
        
      ))}
</Grid>



    </div>
  )
}

export default Cart
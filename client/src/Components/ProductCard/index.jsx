import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../state/reducers/product';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductCard({name, image, description, price}) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '2%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="product image"
        />
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{color: '#287219', fontWeight: "700"}} onClick={() => dispatch(addProduct([name, price]))}>
          Add to cart <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

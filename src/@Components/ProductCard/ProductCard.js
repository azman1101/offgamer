import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import Button from '@Components/Button'

export default ({ addToCart, product }) => {
  const { image, name, price, currency, final_price } = product;
  return (
    <Card sx={{
      height: { xs: 175, sm: 200, md: 460 },
      width: { xs: 175, sm: 200, md: 240 },
      m: 1,
    }}>
      <CardMedia
        component="img"
        image={image}
        sx={{
          height: { xs: 175, sm: 200, md: 300 },
          width: { xs: 175, sm: 200, md: 240 },
        }}
      />
      <CardContent>
        <Typography className='product-name-overflow' variant="body2">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
        <Button onClick={() => addToCart(product)}>Buy</Button>
        <div>
          <span className='text-decoration-line-through'>${price.toFixed(2)}</span>
          <h5 className='text-danger'>${final_price.toFixed(2)}</h5>
        </div>
      </CardActions>
    </Card>
  );
}

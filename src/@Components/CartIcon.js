import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default () => {
  return (
    <IconButton size="large" sx={{ mx: 2 }}>
      <Badge badgeContent={1} color="secondary">
        <ShoppingCartIcon sx={{ color: 'white' }} />
      </Badge>
    </IconButton>
  );
}


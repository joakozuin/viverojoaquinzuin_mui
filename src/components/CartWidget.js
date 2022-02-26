import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -1,
    top: 3,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget({carrito}) {

    const total=carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
  return (
    <>
        { total > 0 && (

         <IconButton aria-label="cart" sx={{ mr: 2}}  >
            <StyledBadge badgeContent={total} color="error">
              <ShoppingCartIcon sx={{ color: pink[50],fontSize: 30 }}/>
            </StyledBadge>
         </IconButton>

        )    
     }
  </>
  );
}
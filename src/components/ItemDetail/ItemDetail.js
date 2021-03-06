import * as React from 'react';

import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Box from '@mui/material/Box';

import ItemCount from "../ItemCount";


const ItemDetail=({planta})=>{


return(
    <>
     <Card sx={{ display:'flex',alignItems:'center', flexDirection:{ xs: 'column' , md: 'row'  }  }}>
      <CardMedia
        component="img"
        sx={{width:{xs:300,md:500}}}
        image={planta.img}
        alt={planta.nombre}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , marginTop:{xs:0,md:20}}}>
          <Typography component="div" variant="h5">
            {planta.nombre}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
           Planta: {planta.categoria}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {planta.detalle}
          </Typography>
          
          <hr/>
          <Typography gutterBottom variant="h7" component="h2">
            Precio ${planta.precio}
          </Typography>
          <Typography gutterBottom variant="h7" component="h4">
             [Stock {planta.stock} un]
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <CardActions>

          <ItemCount planta={planta}/>

       </CardActions> 
        </Box>
      </Box>
    </Card>
 
  </>
);

};

export default ItemDetail;
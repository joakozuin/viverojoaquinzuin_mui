import * as React from 'react';

import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Box from '@mui/material/Box';

import ItemCount from "./ItemCount";


const ItemDetail=(props)=>{

console.log("Dentro del itemDetail",props);
console.log("id:",props.planta.id);
console.log("nombre:",props.planta.nombre);

return(
    <>
     <Card sx={{ display: 'flex' }}>
     <CardMedia
        component="img"
        sx={{ width: 500 }}
        image={props.planta.img}
        alt={props.planta.nombre}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , marginTop: 20}}>
          <Typography component="div" variant="h5">
            {props.planta.nombre}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
           Planta: {props.planta.categoria}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.planta.detalle}
          </Typography>
          <hr/>
          <Typography gutterBottom variant="h7" component="h2">
            Precio {props.planta.precio}
          </Typography>
          <Typography gutterBottom variant="h7" component="h4">
             [Stock {props.planta.stock} un]
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <CardActions>
          <ItemCount />
       </CardActions> 
        </Box>
      </Box>
    </Card>
 
  </>
);

};

export default ItemDetail;
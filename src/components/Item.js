import * as React from 'react';
import {Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import ItemCount from "./ItemCount";

const Item=(props)=>{

return(
    <>
    <Grid item >
     <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.planta.nombre}
          height="385"
          image={props.planta.img}
          title={props.planta.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.planta.nombre}
          </Typography>
          <Typography component="p">{props.planta.detalle}</Typography>
          <hr/>
          <Typography gutterBottom variant="h7" component="h2">
            Precio {props.planta.precio} [Stock {props.planta.stock} un]
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount />
      </CardActions>
    </Card>
   </Grid>
  </>
);


};

export default Item;
import * as React from 'react';
import {Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";

const Item=(props)=>{

return(
    <>
    <Grid item >
     <Card>

     <Link to={`/item/${props.planta.id}`} style={{ textDecoration: "none" }} >

      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.planta.nombre}
          height="385"
          image={props.planta.img}
          title={`${props.planta.nombre}  (Click para más Detalles)`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.planta.nombre}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
           Planta: {props.planta.categoria}
          </Typography>
          <Typography component="p">{props.planta.detalle}</Typography>
          <hr/>
          <Typography gutterBottom variant="h7" component="h2">
            Precio {props.planta.precio} 
          </Typography>
          <Typography gutterBottom variant="h7" component="h4">
             [Stock {props.planta.stock} un]
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>

      <CardActions>
        <ItemCount />
      </CardActions>
    </Card>
   </Grid>
  </>
);


};

export default Item;
import * as React from 'react';
import {Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";

const Item=({planta})=>{

return(
    <>
    <Grid item >
     <Card>

     <Link to={`/item/${planta.id}`} style={{ textDecoration: "none" , color: "black"}} >

      <CardActionArea>
        <CardMedia
          component="img"
          alt={planta.nombre}
          height="385"
          image={planta.img}
          title={`${planta.nombre}  (Click para más Detalles)`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {planta.nombre}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
           Planta: {planta.categoria}
          </Typography>
          <Typography component="p">{planta.detalle}</Typography>
          <hr/>
          <Typography gutterBottom variant="h7" component="h2">
            Precio ${planta.precio} 
          </Typography>
          <Typography gutterBottom variant="h7" component="h4">
             [Stock {planta.stock} un]
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>

      <CardActions>

          <ItemCount planta={planta}/>

      </CardActions>
    </Card>
   </Grid>
  </>
);


};

export default Item;
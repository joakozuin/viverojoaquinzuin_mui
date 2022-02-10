import * as React from 'react';
import {Grid}  from "@mui/material";
import Item from './Item';


const ItemList=(props)=>{
  
    return(
        <div style={{ marginTop: 5, padding:10 }}>
          <Grid container spacing={4} justify="center" justifyContent="center">
           
            {props.plantas.length > 0 ? (
              props.plantas.map(planta => (
               <Item
                key={planta.id}
                 planta={planta}
                 />
           ))
           ): (

            <h1>Cargando Datos....</h1>)
           
           }
          
        </Grid>
      </div>
    );
    
    
    };
    
    export default ItemList;
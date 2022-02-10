import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { green } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCount =() =>{

   const [contador,setContador]=useState(1);

   const disminuir=()=>{
    setContador(contador>=2 ? contador-1 : contador)
   }

   const aumentar=()=>{
    
    setContador(contador<=4 ? contador+1 : contador)
    
   }


    return (


      <div>
        
        <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
          <Button  onClick={disminuir}>-</Button>
          <Button variant="text" onClick={() => {alert(`Cantidad de Plantas en el Carrito: ${contador}`); }}>
            {contador}  </Button>
          <Button  onClick={aumentar} >+</Button>
        </ButtonGroup>
        <div>
         <Button size="small" variant="outlined" sx={{my:1}}
            onClick={() => {alert(`Cantidad de Plantas en el Carrito: ${contador}`); }}>
            Agregar<ShoppingCartIcon sx={{ color: green[500],fontSize: 20 }}/>
         </Button>
          </div>
      </div>
    );
  }
  
  
  export default ItemCount;
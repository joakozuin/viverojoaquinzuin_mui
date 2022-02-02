import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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
        <h2>Desafio 5</h2>
        
        <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large">
          <Button onClick={disminuir}>-</Button>
          <Button variant="text" onClick={() => {alert(`Cantidad de Plantas en el Carrito: ${contador}`); }}>
            {contador}  </Button>
          <Button onClick={aumentar} >+</Button>
        </ButtonGroup>
        <div>
        <Button variant="outlined" sx={{my:2}}
            onClick={() => {alert(`Cantidad de Plantas en el Carrito: ${contador}`); }}>
            Agregar al Carro
        </Button>
          </div>
      </div>
    );
  }
  
  
  export default ItemCount;
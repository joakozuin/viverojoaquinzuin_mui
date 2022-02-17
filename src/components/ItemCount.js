import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { green, red } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

const ItemCount =() =>{

   const [contador,setContador]=useState(1);
   const [botCarrito,setBotCarrito]=useState(true);

   const disminuir=()=>{
    setContador(contador>=2 ? contador-1 : contador)
  
   }

   const aumentar=()=>{
    
    setContador(contador<=4 ? contador+1 : contador)
   }


    const manejaBotonCarr=()=>{
      //alert(`Cantidad de Plantas en el Carrito: ${contador}`);
      setBotCarrito(false);
    }

    const compItem=()=>{

      setBotCarrito(true);
      setContador(1);
    }

    const noCompItem=()=>{

      setBotCarrito(true);
      setContador(1);
    }

    return (


      <div>
         { botCarrito ? 
           <div>
             <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
               <Button  onClick={disminuir}>-</Button>
               <Button variant="text" onClick={manejaBotonCarr}>
                 {contador}  </Button>
                <Button  onClick={aumentar} >+</Button>
             </ButtonGroup>
            <div>
             <Button size="small" variant="outlined" sx={{my:1}}
                onClick={manejaBotonCarr}>
                Agregar<ShoppingCartIcon sx={{ color: green[500],fontSize: 20 }}/>
             </Button>
             </div>
           </div>
         
           : 
           
           <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
             <Button variant="text" onClick={noCompItem} sx={{ color: red[700]}}>Deshacer Compra</Button>
             
             <Link to='/car' style={{ textDecoration: "none" }} >
               <Button  onClick={compItem} >Comprar</Button>
             </Link>

          </ButtonGroup>

          
         } 

         </div>
    );
  }
  
  
  export default ItemCount;
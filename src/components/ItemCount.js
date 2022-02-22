import { useState,useContext } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { green, red } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const ItemCount =({planta}) =>{

   const [cantidad,setCantidad]=useState(1);
   const [botCarrito,setBotCarrito]=useState(true);

   const disminuir=()=>{
    setCantidad(cantidad>=2 ? cantidad-1 : cantidad)
  
   }

   const aumentar=()=>{
    
    setCantidad(cantidad<=4 ? cantidad+1 : cantidad)
   }


    const manejaBotonCarr=()=>{
      alert(`Cantidad de Plantas en el Carrito: ${cantidad}`);
      setBotCarrito(false);
    }

    const compItem=()=>{

      setBotCarrito(true);
      setCantidad(1);
      addItem(planta,cantidad);

    }

    const noCompItem=()=>{

      setBotCarrito(true);
      setCantidad(1);
    }


    const {carrito,addItem,removeItem,clear} = useContext(CartContext);

    return (


      <div>
         { botCarrito ? 
           <div>
             <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
               <Button  onClick={disminuir}>-</Button>
               <Button variant="text" onClick={manejaBotonCarr}>
                 {cantidad}  </Button>
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
             
             <Link to='/cart' style={{ textDecoration: "none" }} >
               <Button 
                  onClick={compItem} >Comprar
                </Button>
             </Link>

          </ButtonGroup>

          
         } 

         </div>
    );
  }
  
  
  export default ItemCount;
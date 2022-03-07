import { useState,useContext } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { green, red} from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const ItemCount =({planta}) =>{

   const [cantidad,setCantidad]=useState(1);
   const [botCarrito,setBotCarrito]=useState(true);
   const [contStock,setConStock]=useState(true);

   const {addItem} = useContext(CartContext);
  
   const disminuir=(stock)=>{
     let cant=cantidad
     cant--;
    if(cant<=stock && cant>0){
      setCantidad(cant)
      setConStock(true);
    }else{
      setConStock(true);
      setCantidad(1)
    }
   }

   const aumentar=(stock)=>{
    let cant=cantidad
     cant++;
     if(cant<=stock && cant>0){
       setCantidad(cant)
       setConStock(true);
     }else{
       setConStock(false);
     }
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


    return (


      <div>
         { botCarrito ? 
           <div>
               { contStock ?

                <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
                  
                  <Button  onClick={()=>disminuir(planta.stock)}>-</Button>
                  <Button variant="text" onClick={manejaBotonCarr}>
                    {cantidad}  </Button>
                  <Button  onClick={()=>aumentar(planta.stock)}>+</Button>
                  <Button size="small" variant="outlined" sx={{my:1, mx:2}}
                     onClick={manejaBotonCarr}>
                     Agregar<ShoppingCartIcon sx={{ color: green[500],fontSize: 20 }}/>
                  </Button>

                </ButtonGroup>

                :

                <ButtonGroup variant="contained" aria-label="outlined primary button group"
                 size="small"  >

                  <Button  onClick={()=>disminuir(planta.stock)}>-</Button>
                  <Button variant="text" color="error">
                    Sin stock </Button>
                  <Button  onClick={()=>aumentar(planta.stock)}>+</Button>
                  
                </ButtonGroup>

                }

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
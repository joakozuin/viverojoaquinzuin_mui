
import { useState,useEffect } from "react";
import  Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import IconButton from '@mui/material/IconButton';
import { red} from '@mui/material/colors';

import { Wrapper } from "./CartItem.styles";



const CartItem = ({item,addItem, removeItem }) => {

  const [cantidad,setCantidad]=useState(1);

  const [contStock,setConStock]=useState(true);


  useEffect(() => {

    setCantidad(item.cantidad)

  },[item.cantidad]); 

 
  const disminuir=(stock)=>{

    let cant=cantidad
    cant--;

   if(cant<=stock && cant>0){
     setCantidad(cant)
     setConStock(true);
     addItem(item,-1)

   }else{
     setCantidad(1)
     setConStock(true);
   }

  }


  const aumentar=(stock)=>{
   let cant=cantidad
    cant++;

    if(cant<=stock && cant>0){
      setCantidad(cant)
      setConStock(true);
      addItem(item,1)

    }else{
      setConStock(false);
    }
  }


 return ( 

    <Wrapper>

      <img src={item.img} alt={item.nombre} />
      <div>
        <h3>{item.nombre}</h3>
        <div className="información">
          <p>Precio: ${parseFloat(item.precio)}</p>
          <p>Total: ${(item.cantidad * parseFloat(item.precio)).toFixed(2)}</p>
        </div>
       </div> 
        <div>
            { contStock ?
              <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
                <Button  onClick={()=>disminuir(item.stock)} >-</Button>
                <Button variant="text">Cantidad: ( {cantidad} )</Button>
                <Button  onClick={()=>aumentar(item.stock)} >+</Button>
              </ButtonGroup>
             :

             <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
              <Button  onClick={()=>disminuir(item.stock)} >-</Button>
              <Button variant="text" color="error"> Sin Stock</Button>
              <Button  onClick={()=>aumentar(item.stock)} >+</Button>
             </ButtonGroup>
            }
        </div>
      
       <div className="buttons">
        <IconButton aria-label="delete" size="large" onClick={()=>removeItem(item.id)} >
           <DeleteIcon fontSize="inherit" sx={{ color: red[500],fontSize: 30 }}/>
        </IconButton>
        </div>
    </Wrapper>
  );
};

export default CartItem;

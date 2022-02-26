//import { Button } from "@material-ui/core";

import CartItem from "../CartList/CartItem";

import { Wrapper,Pie } from "./Cart.styles";
import {useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {green} from '@mui/material/colors';

const Cart = () => {
  
  const {carrito,addItem,removeItem,clear}=useContext(CartContext);

  //console.log("Dentro Cart carrito",carrito);


   const calculateTotal=(carrito)=>{
     const total=carrito.reduce((sum, item) => sum + item.cantidad * parseFloat(item.precio), 0);
     return total
   } 
    
  return (
    <Wrapper>
      <h1>Plantas en el Carrito</h1>
      {carrito.length === 0 ? <h2>No hay plantas en el Carrito.</h2> : null}
      {carrito.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeItem}
          addItem={addItem}
          removeAll={clear}
        />
      ))}

      <Pie>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            sx={{ marginTop: 1 }}
          >
            Seguir Comprando
          </Button>
        </Link>

        <h2>Total: ${calculateTotal(carrito).toFixed(2)}</h2>

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ marginTop: 1, backgroundColor: green[500] }}
          onClick={() => clear()}
        >
          Procesar la Compra
        </Button>
      </Pie>
    </Wrapper>
  );
};

export default Cart;
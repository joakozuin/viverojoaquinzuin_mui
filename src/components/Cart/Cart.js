//import { Button } from "@material-ui/core";

import CartItem from "../CartList/CartItem";

import { Wrapper } from "./Cart.styles";
import {useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Cart = () => {
  
  const {carrito,addItem,removeItem,clear}=useContext(CartContext);

  //console.log("Dentro Cart carrito",carrito);


   const calculateTotal=(carrito)=>{
     const total=carrito.reduce((acc, item) => acc + item.cantidad * parseFloat(item.precio), 0);
     return total
   } 
    
  return (
  
    <Wrapper>
      <h2>Plantas en el Carrito</h2>
      {carrito.length === 0 ? <p>No hay plantas en el Carrito.</p> : null}
      {carrito.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeItem}
          addItem={addItem}
          removeAll={clear}
        />
      ))}

      <h2>Total: ${calculateTotal(carrito).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
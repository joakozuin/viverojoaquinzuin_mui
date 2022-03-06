//import { Button } from "@material-ui/core";

import CartItem from "../CartList/CartItem";

import { Wrapper,Pie,Cabeza } from "./Cart.styles";
import {useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import {green,red} from '@mui/material/colors';
import Alert from '@mui/material/Alert';

import db from "../../helper/firebaseConfig"
import { doc,setDoc,collection,serverTimestamp,updateDoc, increment} from "firebase/firestore";

const Cart = () => {

  const {carrito,addItem,removeItem,clear}=useContext(CartContext);

  //console.log("Dentro Cart carrito",carrito);

   const calcularTotal=(carrito)=>{
     const totalComprado=carrito.reduce((sum, item) => sum + item.cantidad * parseFloat(item.precio), 0);
     return totalComprado
   } 
    
   const ordenCompra=()=>{
        
    const orden={

        cliente:{
          email:"leo@messi.com",
          nombre:"Leo Messi",
          telefono:"(891)-234567654"
        },
        fecha:serverTimestamp(),
        compras:carrito.map((item)=>{return{
               id:item.id,
               nombre:item.nombre,
               precio:item.precio,
               cantidad:item.cantidad
              }}),
              total:calcularTotal(carrito).toFixed(2)
      }
      

     const grabarOrdCompFirebase=async()=>{
         const nuevaOrdenRef=doc(collection(db,"orden"));
         await setDoc(nuevaOrdenRef,orden)
         return nuevaOrdenRef;
       }

     grabarOrdCompFirebase()
      .then((resultado) => {alert(`Su orden de Compra ha sido procesada,
                          Total de la Compra: $${calcularTotal(carrito).toFixed(2)}
                         Nro Orden de Compra: ${resultado.id}`);
                         carrito.map(async (item)=>{

                           const itemRef=doc(db,"plantas1",item.id);
                           await updateDoc(itemRef,{
                             stock: increment(-item.cantidad),
                           })
                         })
                         clear();
      })
    
      .catch((err)=>{console.log(err)});



   }

  return (
    <Wrapper>

      <h1>Plantas en el Carrito</h1>

    <Cabeza>
      {carrito.length === 0 ? (

       <Alert variant="filled" severity="error">
         Carrito Vacio, No hay Ninguna planta en el Carrito....!
       </Alert>

      ) : (
         <Button
          variant="contained"
          endIcon={<DeleteIcon />}
          sx={{ marginTop: 1,marginBottom:2, backgroundColor: red[500] }}
          onClick={() => clear()}
        >
          Borrar el Carrito
        </Button> 
      )}
    </Cabeza>

      {carrito.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addItem={addItem}
          removeItem={removeItem}
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

        <h2>Total Comprado: ${calcularTotal(carrito).toFixed(2)}</h2>

        {carrito.length === 0 ? (

          null

        ) : (
          
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ marginTop: 1, backgroundColor: green[500] }}
              onClick={() => ordenCompra()}
            >
                Procesar la Compra
            </Button>

      )}

      </Pie>
    </Wrapper>
  );
};

export default Cart;
import { createContext,useState } from "react";
import {Link} from "react-router-dom";

export const CartContext=createContext();

const CartContextProvider=({children})=>{

    const [carrito, setCarrito] = useState([]);

    const addItem=(item, cantidad)=>{


      //Artilugio para armar un objeto q incluye la cantidad
      //****************************************************
        const iitem={...item,cantidad}

       const indPlanta=carrito.findIndex((carritItem)=>carritItem.id===iitem.id);
      
       if(indPlanta!==-1){ // Este if implementa el isInCart
            const nuevoCarrito = [...carrito];
            nuevoCarrito[indPlanta].cantidad = nuevoCarrito[indPlanta].cantidad + iitem.cantidad
            setCarrito(nuevoCarrito);
        }else{

            setCarrito([...carrito,iitem]);
           
        }

    }


    const removeItem=(id)=>{

      setCarrito(carrito.filter((planta) => planta.id !== id));

    }

    const clear=()=>{
        setCarrito([]);
    }

  return(

  <CartContext.Provider value={{carrito,setCarrito,addItem,removeItem,clear}}>

      {children}

  </CartContext.Provider>

  )
}
export default CartContextProvider;
import {useContext,useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { green, red} from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const ItemCount =({planta}) =>{

   const [cantidad,setCantidad]=useState(1);
   const [botCarrito,setBotCarrito]=useState(true);
   const [contStock,setConStock]=useState(true);

   const {addItem} = useContext(CartContext);

   const [mensaje, setMensaje] = useState(false);
   const manejMenAbrir = () => {setMensaje(true)}; 
   const manejMenCerrar = () => {setMensaje(false)};

  
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

      manejMenAbrir();
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

         <Mensaje
           abrir={mensaje}
           cerrar={manejMenCerrar}
           cantidad={cantidad}
         />

         </div>
    );
  }
  
  function Mensaje(props) {

    const { abrir,cerrar,cantidad } = props;
  
    return (
      <div>
        
        <Dialog
          open={abrir}
          onClose={cerrar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Agregando plantas...."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description1">

               Agregaste {cantidad} plantas nuevas al carrito.

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button  onClick={cerrar}>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default ItemCount;
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState,useRef } from "react";
import {  Button, TextField } from '@mui/material';

import db from "../../helper/firebaseConfig"
import { doc,setDoc,collection,serverTimestamp,updateDoc, increment} from "firebase/firestore";
import ErrorMensaje from '../ErrorMensaje';



const ClienteForm = (props) => {

    const { carrito,clearCarro,totalComp, abrirForm, cerrarFormClie } = props;

    const nombre=useRef("");
    const email=useRef("");
    const telefono=useRef("");

    const [totComp,setTotComp]=useState()
    const [idCompra, setIdCompra] = useState("------------");
    const [cliente,setCliente]=useState({})

    const [mensajeCliente, setMensajeCliente] = useState(false);
    const manejFormMenAbrir = () => {setMensajeCliente(true)}; 
    const manejFormMenCerrar = () => {setMensajeCliente(false)};

    const [mensajeFormError,setMensajeFormError]=useState(false);
    const [mensajeError,setMensajeError]=useState("");
    const manejFormErrorAbrir = () => {setMensajeFormError(true)}; 
    const manejFormErrorCerrar = () => {setMensajeFormError(false)};

  
    const manejFormClieFinalizar = () => {

        const clie={
              nombre:nombre.current.value.toString(),
              email:email.current.value.toString(),
              telefono:telefono.current.value.toString()
      };

      setCliente(clie);
      cerrarFormClie();
      ordenCompra(clie);
      
    };

    const ordenCompra=(cliente)=>{

      const orden={
          cliente,
          fecha:serverTimestamp(),
          compras:carrito.map((item)=>{return{
                 id:item.id,
                 nombre:item.nombre,
                 precio:item.precio,
                 cantidad:item.cantidad
                }}),
          total:totalComp
        }
  
       setTotComp(totalComp)

       const grabarOrdCompFirebase=async()=>{
           const nuevaOrdenRef=doc(collection(db,"orden"));
           await setDoc(nuevaOrdenRef,orden)
           return nuevaOrdenRef;
         }
  
           grabarOrdCompFirebase()
           .then((resultado) => {

                           carrito.map(async (item)=>{
                             const itemRef=doc(db,"plantas1",item.id);
                             await updateDoc(itemRef,{
                               stock: increment(-item.cantidad),
                             })
                           })

                           setIdCompra(resultado.id);
                           manejFormMenAbrir();
                           clearCarro();       

               })
      
            .catch((err)=>{
              const mens=`Error escribiendo la orden de compra: ${err}`
              manejFormErrorAbrir();
              setMensajeError(mens);
            });
  
     }
  
    return (
      <div>
        <Dialog  open={abrirForm} onClose={cerrarFormClie}>
          <DialogTitle>Datos del Cliente</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para Finalizar la compra Ingrese los Datos solicitados:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="nombre"
              label="Nombre y Apellido "
              type="text"
              fullWidth
              variant="standard"
              onClick={(e)=>{e.stopPropagation()}}
              inputRef={nombre}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Dirección de Correo"
              type="email"
              fullWidth
              variant="standard"
              onClick={(e)=>{e.stopPropagation()}}
              inputRef={email}
            />
            <TextField
              autoFocus
              margin="dense"
              id="telefono"
              label="Teléfono "
              type="text"
              fullWidth
              variant="standard"
              onClick={(e)=>{e.stopPropagation()}}
              inputRef={telefono}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={cerrarFormClie}>Cancelar</Button>
            <Button onClick={manejFormClieFinalizar}>Finalizar Compra</Button>
          </DialogActions>
        </Dialog>

        <MensajeCliente
          abrir={mensajeCliente}
          cerrar={manejFormMenCerrar}
          nombre={cliente.nombre}
          totalComp={totComp}
          idComp={idCompra}
        />
         
         <ErrorMensaje
          abrir={mensajeFormError}
          cerrar={manejFormErrorCerrar}
          mensaje={mensajeError}
         />
      </div>
    );
  };

  function MensajeCliente(props) {

    const { abrir,cerrar,nombre,totalComp, idComp } = props;
  
    return (
      <div>
        
        <Dialog
          open={abrir}
          onClose={cerrar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Su orden de compra se ha procesado Correctamente..."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description1">
                Nro Orden de compra: {idComp}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description2">
                Cliente: {nombre}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
                Total Orden de compra: $ {totalComp}
            </DialogContentText>
          

          </DialogContent>
          <DialogActions>
            <Button  onClick={cerrar}>
              Finalizar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  export default ClienteForm ;
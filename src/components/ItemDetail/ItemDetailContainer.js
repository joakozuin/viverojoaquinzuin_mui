
import {useEffect,useState} from 'react'
import {Grid}  from "@mui/material";

import db from "../../helper/firebaseConfig"
import { doc, getDoc,} from "firebase/firestore";

import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'
import ErrorMensaje from '../ErrorMensaje';

const ItemDetailContainer = (props) => {

  const [plant, setPlant] = useState([]);
  const {id}=useParams();

  const [mensajeFormError,setMensajeFormError]=useState(false);
  const [mensajeError,setMensajeError]=useState("");
  const manejFormErrorAbrir = () => {setMensajeFormError(true)}; 
  const manejFormErrorCerrar = () => {setMensajeFormError(false)};

  useEffect(() => {
    
    const leerBD = async () => {
      try {
        const docRef = doc(db, "plantas1", id);
        const docSnap = await getDoc(docRef);

        const planta = [
          {
            id: docSnap.id,
            ...docSnap.data(),
          },
        ];

        setPlant(planta);
      } catch (err) {
        //console.log("El error es:", err);
        const mens=`Error leyendo la base de datos: ${err}`
        manejFormErrorAbrir();
        setMensajeError(mens);
      }
    };

    leerBD();
  }, [id]);


  return (
    <div style={{ marginTop: 30 }}>
      <h1>{props.saludos}</h1>
      <Grid
        container
        spacing={4}
        justify="center"
        justifyContent="center"
        sx={{ marginTop: 2 }}
      >
        {plant.length > 0 ? (
          <ItemDetail planta={plant[0]} />
        ) : (
          <h1>Cargando Datos....</h1>
        )}
      </Grid>

      <ErrorMensaje
          abrir={mensajeFormError}
          cerrar={manejFormErrorCerrar}
          mensaje={mensajeError}
         />
    </div>
  );
};


export default ItemDetailContainer;
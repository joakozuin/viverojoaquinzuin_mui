
import ItemList from "./ItemList";
import {useEffect,useState} from 'react'

import db from "../../helper/firebaseConfig"
import { collection, getDocs,query,where } from "firebase/firestore";

import {useParams} from 'react-router-dom'
import ErrorMensaje from '../ErrorMensaje';

const ItemListContainer = (props) => {
  const [plant, setPlant] = useState([]);
  
  const {categoria}=useParams();

  const [mensajeFormError,setMensajeFormError]=useState(false);
  const [mensajeError,setMensajeError]=useState("");
  const manejFormErrorAbrir = () => {setMensajeFormError(true)}; 
  const manejFormErrorCerrar = () => {setMensajeFormError(false)};
  
  //Lectura de la BD-->Modo desde firebase
  //**************************************
  useEffect(() => {
    const leerBD = async () => {
      try {
        if (categoria === undefined) {
          //Imagenes de plantas link disco Local
          //************************************
          //const querySnapshot = await getDocs(collection(db, "plantas"));

          //Imagenes de plantas link fireStore
          //************************************
          const querySnapshot = await getDocs(collection(db, "plantas1"));

          const plantass = querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }));

          setPlant(plantass);
        } else {
          const q = query(
            collection(db, "plantas1"),
            where("categoria", "==", categoria)
          );

          const querySnapshot = await getDocs(q);

          const plantass = querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }));

          setPlant(plantass);
        }
      } catch (err) {
        //console.log("El error es:", err);
        const mens=`Error leyendo la base de datos: ${err}`
        manejFormErrorAbrir();
        setMensajeError(mens);
      }
    };

    leerBD();
  }, [categoria]);




  return (
    <div>
      
      <h1>{props.saludos}</h1>

      {plant.length > 0 ? (
        <ItemList plantas={plant} />
      ) : (
        <h1>Cargando Datos....</h1>
      )}

        <ErrorMensaje
          abrir={mensajeFormError}
          cerrar={manejFormErrorCerrar}
          mensaje={mensajeError}
         />

    </div>
  );
};


export default ItemListContainer;
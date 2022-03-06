
import {useEffect,useState} from 'react'
import {Grid}  from "@mui/material";

import db from "../helper/firebaseConfig"
import { doc, getDoc,} from "firebase/firestore";

import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = (props) => {

  const [plant, setPlant] = useState([]);
  const {id}=useParams();

   //console.log(`id Destructurado:${id}`);

  useEffect(() => {
    //console.log(`Renderizando id Destructurado:${id} -->${typeof(id)}`);
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
        console.log("El error es:", err);
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
        sx={{ marginTop: 5 }}
      >
        {plant.length > 0 ? (
          <ItemDetail planta={plant[0]} />
        ) : (
          <h1>Cargando Datos....</h1>
        )}
      </Grid>
    </div>
  );
};


export default ItemDetailContainer;
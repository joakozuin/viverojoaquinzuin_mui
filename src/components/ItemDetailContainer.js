
import {useEffect,useState} from 'react'
import {Grid}  from "@mui/material";
import coderFetch from "../helper/coderFetch"
import  plantas from "../assets/data/bdPlantas.json";
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = (props) => {
  const [plant, setPlant] = useState([]);
  const {id}=useParams();

  //console.log(`id Destructurado:${id}`);

  useEffect(() => {
    console.log("Renderizando:");
    const leerBD = async (plantas) => {
      try {

        let plantass = await coderFetch(500, plantas.filter(plan=>plan.id===id), true);
        setPlant(plantass);

        //console.log(`Renderizando dentro del try:`,plantass);

      } catch (err) {
        //console.log("El error es:", err);
      }
    };

    leerBD(plantas);
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
        {/* {console.log("dentro del contenedor:",plant )} */}

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
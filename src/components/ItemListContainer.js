
import ItemList from "./ItemList";
import {useEffect,useState} from 'react'
import coderFetch from "../helper/coderFetch"
import  plantas from "../assets/data/bdPlantas.json";
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {
  const [plant, setPlant] = useState([]);
  
  const {categoria}=useParams();

  //console.log(`Categoria Destructurado:${categoria}`);

  useEffect(() => {
    //console.log("Renderizando:");
    const leerBD = async (plantas) => {
      try {

        if(categoria===undefined){
             let plantass = await coderFetch(2000, plantas, true);
             setPlant(plantass);
             //console.log(`Categoria Destructurado:${categoria}`);
             //console.log(`Renderizando:${plant}`);
        }else{
             let plantass = await coderFetch(2000, plantas.filter(plan=>plan.categoria===categoria),true);
             setPlant(plantass);
             //console.log(`Categoria Destructurado:${categoria}`);
             //console.log(`Renderizando:${plant}`);
        }

      } catch (err) {

        //console.log("El error es:", err);

      }
    };

    leerBD(plantas);

  }, [categoria]);

  return (
    <div>
      
      <h1>{props.saludos}</h1>

      {plant.length > 0 ? (
        <ItemList plantas={plant} />
      ) : (
        <h1>Cargando Datos....</h1>
      )}

    </div>
  );
};


export default ItemListContainer;
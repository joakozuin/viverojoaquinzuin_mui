//import img00 from "../assets/img/AbejaFlor00.png";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useEffect,useState} from 'react'
import coderFetch from "../helper/coderFetch"
import  plantas from "../assets/data/bdPlantas.json";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer =(props) =>{

  const [plant,setPlant]=useState([]);
 
  useEffect(()=>{
     
     console.log('Renderizando:');
      const leerBD=async(plantas)=>{
        try{
         let plantass=await coderFetch(2000,plantas,true)
         setPlant(plantass);   
        }
        catch(err){console.log('El error es:',err)};  
      }

      leerBD(plantas);

    },[]);


  return (
    <div>
      <p>Desfio N4</p>
      <h1>{props.saludos}</h1>
      <p>Desfio N5</p>
      <ItemCount />
      <p>Desfio N6</p>

       {plant.length > 0 ?

        <ItemList plantas={plant} />
        
       :
        <h1>Cargando Datos....</h1>
       }

       {plant.length > 0 ?

        <ItemDetailContainer planta={plant[1]}/>
       :
       <hr/>

       }  
      
      
      {/* <img src={img00} alt="Vivero Joaquin" width="500" height="600"></img> */}
    </div>
  );
}


export default ItemListContainer;
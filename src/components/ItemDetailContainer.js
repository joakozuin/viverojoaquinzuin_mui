
import {useEffect,useState} from 'react'
import {Grid}  from "@mui/material";
import coderFetch from "../helper/coderFetch"
import  plantas from "../assets/data/bdPlantas.json";
import ItemDetail from './ItemDetail';

const ItemDetailContainer =(props) =>{

  /* const [plant,setPlant]=useState([]);
 
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

    },[]); */


  return (
    <div style={{ marginTop: 30}}>
      <p>Desfio N7</p>
      <Grid container spacing={4} justify="center" justifyContent="center" sx={{marginTop: 5}} >
       
        {console.log("dentro del contenedor",props.planta)}
      
       <ItemDetail
           planta={props.planta}
       /> 

      </Grid>
    </div>
  );
}


export default ItemDetailContainer;
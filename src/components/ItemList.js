import * as React from 'react';
import {useEffect,useState} from 'react'
import {Grid}  from "@mui/material";
import Item from './Item';
import  plantas from "../assets/data/bdPlantas.json";

const ItemList=()=>{

    const [plant,setPlant]=useState([]);
 
    useEffect(()=>{
       
       console.log('Renderizando:');

      //Llamada sincrónica
      //------------------

      /*  cFetch(2000,plantas,true)
        .then(plantass=>{
                console.log('Los datos leidos de la BD:',plantass)
                setPlant(plantass);
               })
        .catch(err=>console.log('El error es:',err)); */


       //Llamada asincrónica
       //--------------------
        const leerBD=async(plantas)=>{
          try{
           let plantass=await cFetch(2000,plantas,true)
           setPlant(plantass);   
          }
          catch(err){console.log('El error es:',err)};  
        }

        leerBD(plantas);

      },[]);
  
    

   //Fetch artificial para el desafio 
   //********************************
   const cFetch=(tiempo,datos,is_ok)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(is_ok){
           resolve(datos);
        }else{
           reject("Error leyendo datos de la BD");
        }
      },tiempo)
    });
   };
   
  
    return(
        <div style={{ marginTop: 5, padding:10 }}>
          <Grid container spacing={4} justify="center" justifyContent="center">
           
            {plant.length > 0 ? (
              plant.map(planta => (
               <Item
                key={planta.id}
                 planta={planta}
                 />
           ))
           ): (

            <h1>Cargando Datos....</h1>)
           
           }
          

        </Grid>
      </div>
    );
    
    
    };
    
    export default ItemList;
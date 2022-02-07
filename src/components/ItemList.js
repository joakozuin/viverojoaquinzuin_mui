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
           reject("Error leyendo datos en la BD");
        }
      },tiempo)
    });
   };
   

  const LectPlant=(props)=>{
      const items=props.plantas.map((planta) => ( 
      <Item key={planta.id} planta={planta}/> 
    ));
   return items
  }
  
 
    return(
        <div style={{ marginTop: 5, padding: 10 }}>
        <Grid container spacing={2} justify="center">
  
         {/*  {plantas.map(planta => (
              <Item key={planta.id} planta={plant}/>
          ))} */}

          <LectPlant plantas={plant} />

        </Grid>
      </div>
    );
    
    
    };
    
    export default ItemList;
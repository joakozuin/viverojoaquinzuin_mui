

//Fetch artificial para el desafio 
   //********************************
   const coderFetch=(tiempo,datos,is_ok)=>{
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

   export default coderFetch;
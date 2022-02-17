import React from 'react';
import imgAbeja from '../assets/img/AbejaFlor00.png';


let estilo={
    width: "600px",
    height: "600px",
    backgroundImage: `url(${imgAbeja})`,
    dispay: "flex",
    justifyContent: "center"
}

export const Car = (props) => {

  return (
  <div>
      <h1>{props.saludos}</h1>
      <div style={estilo}>
        <h2>Compras en el Carrito</h2>
      </div>
  </div>
  );   
};

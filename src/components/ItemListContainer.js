//import img00 from "../assets/img/AbejaFlor00.png";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer =(props) =>{
  return (
    <div>
      <p>Desfio N4</p>
      <h1>{props.saludos}</h1>
      <p>Desfio N5</p>
      <ItemCount />
      <p>Desfio N6</p>
      <ItemList />
     
      {/* <img src={img00} alt="Vivero Joaquin" width="500" height="600"></img> */}
    </div>
  );
}


export default ItemListContainer;
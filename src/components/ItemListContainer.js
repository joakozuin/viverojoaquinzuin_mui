import img00 from "../assets/img/AbejaFlor00.png";

import ItemCount from "./ItemCount";

const ItemListContainer =() =>{
  return (
    <div>
      <ItemCount />
      <img src={img00} alt="Vivero Joaquin" width="500" height="600"></img>
    </div>
  );
}


export default ItemListContainer;
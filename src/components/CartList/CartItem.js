import  Button from '@mui/material/Button';

import { Wrapper } from "./CartItem.styles";



const CartItem = ({item, removeFromCart,addItem,removeAll }) => {

  console.log("Dentro CartItem",item);


 return (
     
  

    <Wrapper>
      <div>
        <h3>{item.nombre}</h3>
        <div className="información">
          <p>Precio: ${parseFloat(item.precio)}</p>
          <p>Total: ${(item.cantidad * parseFloat(item.precio)).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            /* onClick={() => removeFromCart(item.id)} */
            /* onClick={disminuir} */
             onClick={()=>addItem(item,-1)} 
          >
            -
          </Button>
          <p>{item.cantidad}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            /* onClick={() => addItem(item)} */
            onClick={()=>addItem(item,1)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.img} alt={item.nombre} />
    </Wrapper>
  );
};

export default CartItem;

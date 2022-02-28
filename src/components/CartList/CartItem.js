import  Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import IconButton from '@mui/material/IconButton';
import { red} from '@mui/material/colors';

import { Wrapper } from "./CartItem.styles";



const CartItem = ({item, removeFromCart,addItem,removeAll }) => {

  //console.log("Dentro CartItem",item);


 return ( 

    <Wrapper>

      <img src={item.img} alt={item.nombre} />
      <div>
        <h3>{item.nombre}</h3>
        <div className="información">
          <p>Precio: ${parseFloat(item.precio)}</p>
          <p>Total: ${(item.cantidad * parseFloat(item.precio)).toFixed(2)}</p>
        </div>
        
            <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small" >
               <Button  onClick={()=>addItem(item,-1)} >-</Button>
               <Button variant="text">Cantidad: ( {item.cantidad} )</Button>
                <Button  onClick={()=>addItem(item,1)} >+</Button>
             </ButtonGroup>
      </div>
       <div className="buttons">
        <IconButton aria-label="delete" size="large" onClick={()=>removeFromCart(item.id)} >
           <DeleteIcon fontSize="inherit" sx={{ color: red[500],fontSize: 30 }}/>
        </IconButton>
        </div>
    </Wrapper>
  );
};

export default CartItem;

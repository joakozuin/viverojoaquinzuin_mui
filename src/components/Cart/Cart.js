import FlexBox from './FlexBox';
import { Span } from './Typography';
import CartItem from "../CartList/CartItem";
import {useContext,useState} from "react";
import { CartContext } from "../Context/CartContext";
import {Link} from "react-router-dom";
import {Cabeza } from "./Cart.styles";
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import Alert from '@mui/material/Alert';
import {red} from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Autocomplete, Button, Card, Divider, Grid, TextField } from '@mui/material';

import countryList from './countryList';
import stateList from './stateList';

import ClienteForm from '../ClienteForm/ClienteForm'

const Cart = () => {

  const {carrito,addItem,removeItem,clear}=useContext(CartContext);

  const [abrirClieForm, setAbrirClieForm] = useState(false);

   const manejFormClieAbrir = () => {
     setAbrirClieForm(true);
  }; 

  const manejFormClieCerrar = () => {
    setAbrirClieForm(false);
  };

 // console.log("Dentro Cart carrito",carrito);

   const calcularTotal=(carrito)=>{
     const totalComprado=carrito.reduce((sum, item) => sum + item.cantidad * parseFloat(item.precio), 0);
     return totalComprado
   } 

  return (
    <>
      <h1>Plantas en el Carrito</h1>

      <Cabeza>
        {carrito.length === 0 ? (
          <Alert variant="filled" severity="error">
            Carrito Vacio, No hay Ninguna planta en el Carrito....!
          </Alert>
        ) : (
          <Button
            variant="contained"
            endIcon={<DeleteIcon />}
            sx={{ marginTop: 1, marginBottom: 2, backgroundColor: red[500] }}
            onClick={() => clear()}
          >
            Borrar el Carrito
          </Button>
        )}
      </Cabeza>

      <Grid container spacing={3}>
        <Grid item lg={8} md={8} xs={12}>
          {carrito.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))}

           <Link to="/" style={{ textDecoration: "none", color: "white" }}>
             <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                 sx={{ marginTop: 1 }}
               >
               Seguir Comprando
              </Button>
            </Link>
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <Card
            sx={{
              padding: "1.5rem 1.75rem",
              "@media only screen and (max-width: 678px)": {
                padding: "1rem",
              },
            }}
          >
            <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
              <Span color="grey.600">Compra Total:</Span>
              <FlexBox alignItems="flex-end">
                <Span fontSize="18px" fontWeight="600" lineHeight="1">
                  ${calcularTotal(carrito).toFixed(2)}
                </Span>
                <Span fontWeight="600" fontSize="14px" lineHeight="1"></Span>
              </FlexBox>
            </FlexBox>

            <Divider
              sx={{
                mb: "1rem",
              }}
            />

            <TextField
              label="Código Descuento"
              placeholder="Código Descuento"
              size="small"
              variant="outlined"
              fullWidth
            />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{
                mt: "1rem",
                mb: "30px",
              }}
            >
              Aplicar Descuento
            </Button>

            <Divider
              sx={{
                mb: "1rem",
              }}
            />

            <Span fontWeight="600" mb={2} display="block">
              Estimar Costo Envío
            </Span>

            <Autocomplete
             
              options={countryList}
              getOptionLabel={(option) => option.label}
              fullWidth
              sx={{
                mb: "1rem",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Pais"
                  placeholder="Seleccione Pais"
                  variant="outlined"
                  size="small"
                />
              )}
            />

            <Autocomplete
            
              options={stateList}
              getOptionLabel={(option) => option.label}
              fullWidth
              sx={{
                mb: "1rem",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Provincia"
                  placeholder="Seleccione Provincia"
                  variant="outlined"
                  size="small"
                />
              )}
            /> 

            
            <TextField
              label="Código Postal"
              placeholder="3100"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                mt: "1rem",
              }}
            />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{
                my: "1rem",
              }}
            >
              Calculo del Envío
            </Button>

            <Button
              variant="contained"
              color="primary"
               fullWidth
               onClick={manejFormClieAbrir} 
               >
               Finalizar la Compra
            </Button>
           
             <ClienteForm
               carrito={carrito}
               clearCarro={clear}
               totalComp={calcularTotal(carrito)}
               abrirForm={abrirClieForm}
               cerrarFormClie={manejFormClieCerrar}
              />
              
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
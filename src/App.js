
import "./App.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart  from "./components/Cart/Cart";
import CartContextProvider from "./components/Context/CartContext";

function App() {
  return (

    <CartContextProvider>

     <BrowserRouter basename={process.env.PUBLIC_URL} >
       <div className="App">
         <NavBar />
          <Routes>
           <Route
             path="/"
             element={<ItemListContainer saludos={" Hola BienVenidos ...."} />}
           />
           <Route
             path="/category/:categoria"
             element={<ItemListContainer saludos={" Hola BienVenidos ...."} />}
           />
           <Route
             path="/item/:id"
             element={<ItemDetailContainer saludos={" Hola BienVenidos ...."} />}
           />
           <Route
            path="/cart"
            element={<Cart saludos={" Hola BienVenidos ...."} />}
           />
         </Routes>
       </div>
     </BrowserRouter>

    </CartContextProvider>

  );
}

export default App;


import "./App.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

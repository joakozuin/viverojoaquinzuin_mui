
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludos={" Hola BienVenidos ...."}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

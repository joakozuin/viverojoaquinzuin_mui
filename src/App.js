
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

     {/*  <CartWidget /> */}

      <h1>Vivero Joaquin </h1>
      <ItemListContainer/>

      
    </div>
  );
}

export default App;

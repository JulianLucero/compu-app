import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Hola aca va estar mi catalogo de Compu Shopping"/>
    </div>
  );
}

export default App;

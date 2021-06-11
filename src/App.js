import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Hola aca va estar mi catalogo de Compu Shopping"/>
      <ItemCount/>
    </div>
  );
}

export default App;

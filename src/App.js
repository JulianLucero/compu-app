import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>
     {/* <ItemListContainer title =" Producto"/>*/}
      <ItemDetailContainer title="Item"/>
    </div>
  );
}

export default App;

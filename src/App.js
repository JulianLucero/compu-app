import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import {ToastContainer} from "react-toastify";
import {StoreProvider} from './context/CartContext';
import AppRouter from './routers/AppRouter';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container className="contenedor">
          <Switch>
            <Route exact path="/" component={Home} />
            <ItemListContainer title=" Producto" />
            <ItemDetailContainer title="Item" />
          </Switch>
        </Container>
        {/*<StoreProvider>
          <div className="App">
            <AppRouter/>
            <ToastContainer/>
          </div>
        </StoreProvider> */}
      </div>
    </Router>

  );
}

export default App;

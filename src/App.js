import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import About from "./pages/About";
import Products from "./pages/Products";



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:id" component={ItemDetailContainer} />
          </Switch>
      </div>
    </Router>

  );
}

export default App;

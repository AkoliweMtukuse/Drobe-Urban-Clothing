import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import Checkout from "./components/products/Checkout";
import Register from "./components/auth/Register";
import Login from "./components/pages/Login";
import ProductState from "./context/products/ProductState";
import "./App.css";
import "./components/FontAwesomeIcon/fonts";

class App extends React.Component {
  state = { authToken: "" };
  render() {
    return (
      <ProductState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </ProductState>
    );
  }
}

export default App;

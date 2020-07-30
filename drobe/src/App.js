import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ProductState from "./context/products/ProductState";
import "./App.css";
import "./components/FontAwesomeIcon/fonts";

const App = () => {
  return (
    <ProductState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/about"
                path="/api/products"
                component={About}
              />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ProductState>
  );
};

export default App;

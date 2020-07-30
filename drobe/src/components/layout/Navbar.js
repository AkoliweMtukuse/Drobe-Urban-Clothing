import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "./drobe-logo.png";
import "./Navbar.css";

export const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Drobe Urban Clothing",
};
export default Navbar;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = ({ title }) => {
  return (
    <div className="navbar ">
      <h1 id="title">{title}</h1>
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
  title: "InStore",
};
export default Navbar;

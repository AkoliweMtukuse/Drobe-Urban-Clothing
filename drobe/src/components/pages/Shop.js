import React from "react";
import "./Shop.css";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Products from "../products/Products";
import { Row, Col } from "react-bootstrap";
import Wishlist from "../products/WishList";
const Shop = (props) => {
  return (
    <div>
      <Navbar />
      <Row>
        <Col style={{ backgroundColor: "black" }}>
          {" "}
          <Wishlist token={props.location.state.token} />
        </Col>
        <Col xs={9} style={{ backgroundColor: "grey" }} id="shopMenu">
          <Products token={props.location.state.token} />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Shop;

import React from "react";
import "./Shop.css";
import Products from "../products/Products";
import { Container, Row, Col } from "react-bootstrap";

const Shop = () => {
  return (
    <div>
      <Row>
        <Col style={{ backgroundColor: "black" }} id="shopMenu ">
          1 of 3
        </Col>
        <Col xs={9} style={{ backgroundColor: "grey" }} id="shopCol">
          <Row>
            <Col xs={3} style={{ backgroundColor: "grey" }} id="shopMenu ">
              <Products />
            </Col>
            <Col xs={3} style={{ backgroundColor: "grey" }} id="shopCol">
              <Products />
            </Col>
            <Col xs={3} style={{ backgroundColor: "grey" }} id="shopCol">
              <Products />
            </Col>
            <Col xs={3} style={{ backgroundColor: "grey" }} id="shopMenu ">
              <Products />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Shop;

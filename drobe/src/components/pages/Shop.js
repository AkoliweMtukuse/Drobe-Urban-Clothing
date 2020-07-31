import React from "react";
import Products from "../products/Products";
import { Container, Row, Col } from "react-bootstrap";

const Shop = () => {
  return (
    <div>
      <Row>
        <Col sm={3} style={{ backgroundColor: "blue" }}>
          sm=4
        </Col>
        <Col sm={9} style={{ backgroundColor: "red" }}>
          <Products />
        </Col>
      </Row>
    </div>
  );
};

export default Shop;

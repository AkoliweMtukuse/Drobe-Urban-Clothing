import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

const Cards = () => {
  return (
    <Row>
      <Col xs md={3.5} id="CardCol">
        <div class="container">
          <img
            src="https://i.pinimg.com/564x/cc/c6/78/ccc678c04d9ea0c67d4deb368bb1a353.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div class="text">Hello World</div>
            <Button>Shop</Button>
          </div>
        </div>
      </Col>

      <Col xs md={4} id="CardCol">
        <div class="container">
          <img
            src="https://i.pinimg.com/564x/47/a4/dc/47a4dcf0acd17545c6f891213f1d4fcc.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div class="text">Hello World</div>
            <Button>Shop</Button>
          </div>
        </div>
      </Col>

      <Col xs md={3.5} id="CardCol">
        <div class="container">
          <img
            src="https://i.pinimg.com/564x/0e/4d/21/0e4d21ac150a9c4f19989e28f0ad8022.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div class="text">Hello World</div>
            <Button>Shop</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Cards;

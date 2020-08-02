import React from "react";
import { ControlledCarousel } from "./homeComponents/Carousel";
import Cards from "./homeComponents/Cards";
import Footer from "../../components/layout/Footer";
import { Row, Col, Card, Button, Container, Jumbotron } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Row className="textRow">
        <Col id="Statement">
          <p id="StatementText">
            Stay at home / Wash your hands / Stay safe during the #Covid19
            global pandemic.
          </p>
        </Col>
      </Row>
      <Row className="carouselRow">
        <Col xs lg="0.5" style={{ backgroundColor: "white" }}></Col>

        <Col md="11" style={{ backgroundColor: "#efefef" }} id="carouselRow">
          <ControlledCarousel />
        </Col>

        <Col xs lg="0.5" style={{ backgroundColor: "white" }}></Col>
      </Row>

      <Row className="textRow2">
        <Col id="Statement2">
          <h1 id="StatementText2">
            Get an discount of 20%, 30%, 40% <br></br>on our Top Brands
          </h1>
          <Button id="Button">Shop</Button>
        </Col>{" "}
      </Row>
      <h1 id="headings">Adidas Sweater</h1>
      <Row className="cardsRow">
        <Col
          xs
          lg="0.5"
          style={{ backgroundColor: "white" }}
          id="cardCol"
        ></Col>

        <Col md="11" style={{}} id="cardCol">
          <Cards />
        </Col>

        <Col
          xs
          lg="0.5"
          style={{ backgroundColor: "white" }}
          id="cardCol"
        ></Col>
      </Row>
      <Row className="cardsRow">
        <Col
          xs
          lg="0.5"
          style={{ backgroundColor: "white" }}
          id="cardCol"
        ></Col>

        <Col xs="11" style={{}} id="cardCol">
          <Jumbotron fluid id="Jumbotron">
            <Container>
              <h1>Adidas Sneaker "Ozweego"</h1>
              <p>Impossible is just a word, Impossible is nothing</p>
            </Container>
          </Jumbotron>
        </Col>

        <Col
          xs
          lg="0.5"
          style={{ backgroundColor: "white" }}
          id="cardCol"
        ></Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import { ControlledCarousel } from "./homeComponents/Carousel";
import Cards from "./homeComponents/Cards";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
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
          <Button
            id="Button"
            style={{ width: "auto", height: "auto", fontSize: "20px" }}
          >
            Shop
          </Button>
        </Col>{" "}
      </Row>
      <h1 id="headings">Adidas Tees</h1>
      <Row className="cardsRow">
        <Col xs lg="0.5" style={{ backgroundColor: "white" }}></Col>

        <Col md="11" style={{ backgroundColor: "#efefef" }} id="cardsRow">
          <Cards />
        </Col>

        <Col xs lg="0.5" style={{ backgroundColor: "white" }}></Col>
      </Row>
      <Row className="carouselTwoRow">
        <Col xs lg="0.5" style={{ backgroundColor: "white" }}></Col>

        <Col
          md="11"
          style={{ backgroundColor: "#efefef" }}
          id="carouselTwoRow"
        ></Col>

        <Col xs lg="0.5" style={{ backgroundColor: "white" }}></Col>
      </Row>
    </div>
  );
};

export default Home;

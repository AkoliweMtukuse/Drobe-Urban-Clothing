import React from "react";
import "./About.css";
import Navbar from "../layout/Navbar";
import { Card, Button } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Navbar />
      <Card>
        <Card.Header>More of Us</Card.Header>
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            We are the brand new distributors of the well-known clothing
            companies such as NIKE, ADIDAS,REEBOK ,including PUMA and many more
            others.
            <br></br>
            Founded in the year of 2001 the 03rd July , we have been taking the
            streets by storm in hot new and trending Men clothing line.<br></br>
            <br></br>
            Our mission is what drives us to do everything possible to expand
            human potential. We do that by creating groundbreaking sport
            innovations, by making our products more sustainably, by building a
            creative and diverse global team and by making a positive impact in
            communities where we live and work.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;

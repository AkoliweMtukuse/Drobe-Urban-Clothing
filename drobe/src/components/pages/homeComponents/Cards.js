import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div id="card-container">
      <div class="wrapper">
        <div class="product-img">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/247d6061843303.5a7b8328b1de0.jpg"
            height="420"
            width="327"
          />
        </div>
        <div class="product-info">
          <div class="product-price-btn">
            <p>
              <span>
                Adidas Sweater
                <br></br>
                Maroon for Men
              </span>
            </p>
            <button type="button">
              <Link to="./login" id="Link">
                Shop
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <div class="product-img">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cde61c61843303.5a7b8328b0f01.jpg"
            height="420"
            width="327"
          />
        </div>
        <div class="product-info">
          <div class="product-price-btn">
            <p>
              <span>
                Adidas Hoodie
                <br></br>Yellow for Men
              </span>
            </p>
            <button type="button">
              <Link to="./login" id="Link">
                Shop
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <div class="product-img">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d4d2c961843303.5a7b8328af0d4.jpg"
            height="420"
            width="327"
          />
        </div>
        <div class="product-info">
          <div class="product-price-btn">
            <p>
              <span>
                Adidas Sweater<br></br>
                Red for Men
              </span>
            </p>
            <button type="button">
              <Link to="./login" id="Link">
                Shop
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

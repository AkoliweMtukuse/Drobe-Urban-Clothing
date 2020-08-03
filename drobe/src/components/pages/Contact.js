import React from "react";
import Navbar from "../layout/Navbar";
import "./Contact.css";
import { Row, Col, Card, Button } from "react-bootstrap";

const Contact = () => {
  function getMessage() {
    // const message = a;
    // if (message === "./register")
    try {
      alert(" Your message was sent!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar />
      <Row>
        <Col xs="0.5"></Col>
        <Col xs={11}>
          {" "}
          <div class="container">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                  </div>
                  <div class="app-contact">
                    CONTACT INFO : +62 81 314 928 595
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="NAME"
                        value="Write here"
                      />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="EMAIL" />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="CONTACT NO"
                      />
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="MESSAGE" />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">CANCEL</button>
                      <button class="app-form-button">
                        <a onClick={getMessage}>SEND</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs="0.5"></Col>
      </Row>
      b{" "}
    </div>
  );
};

export default Contact;

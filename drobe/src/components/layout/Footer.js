import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="page-footer" id="footer">
        <div id="footer-container">
          <div className="row">
            <div className="col l6 s12">
              <h3 className="white-text" id="logo">
                InStore
              </h3>
              <a className="grey-text " href="#" id="link">
                <FontAwesomeIcon icon="facebook" />
                instagram: instoremen
              </a>
              <br></br>{" "}
              <a
                className="grey-text "
                href="https://www.linkedin.com/in/akoliwe-mtukuse-46a7121ab"
                id="link"
              >
                twitter: @instoremen
              </a>
              <br></br>
              <a
                className="grey-text "
                href="https://www.linkedin.com/in/akoliwe-mtukuse-46a7121ab"
                id="link"
              >
                facebook: instoremen
              </a>
              <a className="grey-text " href="#" id="link">
                phone: 111 - 777 - 444
              </a>
              <br></br>
              <a className="grey-text " href="mailto:#" id="link">
                email: instoremen@gmail.com
              </a>
              <br></br>
              <a className="grey-text " href="mailto:0614747204" id="link">
                phone: 111 - 777 - 444
              </a>
              <br></br>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2020 Copyright</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

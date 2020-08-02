import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({ product }) => {
  const { id, name, img, price, saving, type } = product;

  // funtion getproducts(){

  // }
  function addWishList(item) {
    axios
      .post("http://localhost:5000/api/products", item, {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYxZDY2ZjdhNThhYWEzMGM0MTc3OTA1In0sImlhdCI6MTU5NTc2MjQyMywiZXhwIjoxNTk2MTIyNDIzfQ.2XkJUxMIn8t_t0aD7f2OfqnKoUBGMcFNFm-J-tpPxUE",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="shopCards">
      <Card style={{ width: "18rem" }} id="shopCards">
        <Card.Img variant="top" src={img} id="shopCards" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
            <span>{saving}</span>
          </Card.Text>
          <Card.Text></Card.Text>
          <Button id="shopButton">
            {" "}
            <FontAwesomeIcon icon="shopping-bag" />
          </Button>

          <Button>
            {" "}
            <FontAwesomeIcon icon="shopping-cart" />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;

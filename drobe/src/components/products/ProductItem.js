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
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
          <span>{saving}</span>
        </Card.Text>
        <Card.Text></Card.Text>
        <Button>
          <FontAwesomeIcon icon="shopping-bag" />
        </Button>
        <Button>
          {" "}
          <span>
            <FontAwesomeIcon icon="shopping-cart" />
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;

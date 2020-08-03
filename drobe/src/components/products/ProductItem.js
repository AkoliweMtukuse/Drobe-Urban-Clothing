import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SetAuthToken from "../utils/setAuthToken";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckOut from "./Checkout";
import { Card, Button, Alert } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const loadUser = async () => {
  if (localStorage.token) {
    SetAuthToken(localStorage.token);
  }
};
const ProductItem = (product, props) => {
  const { id, name, img, price, saving, type } = product.product;

  function addWishList(item) {
    axios
      .post("http://localhost:5000/api/products", item, {
        headers: {
          "x-auth-token": product.token,
        },
      })
      .then((res) => {
        alert((res = "Your item has been added to your wishlist"));
        // alert((res = "Your item has been added to your wishlist!"));
      })
      .catch((err) => {
        alert((err = "Something went wron with your token"));
        // console.log((err = "Something went wrong.Please write carefully."));
      });
  }

  return (
    <div id="shopCards">
      <div class="card" style={{ width: "30vh" }}>
        <div className="image-content">
          <img src={img} alt="Denim Jeans" id="CardImage" />
        </div>
        <div className="card-content">
          <h3 name="name" value={name} id="CardTitle">
            {name}
          </h3>
          <span class="price">
            <p> {price} </p>
            save <span>{saving}</span>
          </span>

          <p>
            <button onClick={() => addWishList(product.product)}>
              Wishlist
            </button>
            <button>
              <Link to="./checkout" style={{ color: "black" }}>
                add to cart
              </Link>
            </button>
            {/* <b id="C*/}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

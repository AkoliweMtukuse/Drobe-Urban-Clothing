import React from "react";
import axios from "axios";

const Wishlist = (product, props) => {
  const { id, name, img, price, saving, type } = product.product;

  function addWishList(item) {
    axios
      .get("http://localhost:5000/api/products", item, {
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
    console.log(product);
  }

  return (
    <div>
      <div className="Card">
        <div>
          {name}
          <a
            onClick={() => addWishList(product.product)}
            style={{ color: "white" }}
          >
            Wishlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

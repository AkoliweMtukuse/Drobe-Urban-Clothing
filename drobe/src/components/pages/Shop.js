import React from "react";
import Products from "../products/Products";

const Shop = () => {
  return (
    <div className="grid-8">
      <div>Side bar</div>
      <div>
        <Products />
      </div>{" "}
    </div>
  );
};

export default Shop;

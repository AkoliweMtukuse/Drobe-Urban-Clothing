import React, { Fragment, useContext } from "react";
import ProductContext from "../../context/products/productContext";
import WishlistItem from "./WishlistItem";

export const Wishlist = (props) => {
  const productContext = useContext(ProductContext);

  const { products } = productContext;
  return (
    <Fragment>
      {products.map((product) => (
        <WishlistItem key={product.id} product={product} token={props.token} />
      ))}
    </Fragment>
  );
};

export default Wishlist;

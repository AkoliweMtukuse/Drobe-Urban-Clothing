import React, { Fragment, useContext } from "react";
import ProducttItem from "./ProductItem";
import ProductContext from "../../context/products/productContext";

const Products = (props) => {
  const productContext = useContext(ProductContext);

  const { products } = productContext;
  return (
    <Fragment>
      {products.map((product) => (
        <ProducttItem key={product.id} product={product} token={props.token} />
      ))}
    </Fragment>
  );
};

export default Products;

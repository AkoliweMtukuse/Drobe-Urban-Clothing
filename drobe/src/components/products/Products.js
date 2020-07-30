import React, { Fragment, useContext } from "react";
import ProducttItem from "./ProductItem";
import ProductContext from "../../context/products/productContext";

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products } = productContext;
  return (
    <Fragment>
      {products.map((product) => (
        <ProducttItem key={product.id} product={product} />
      ))}
    </Fragment>
  );
};

export default Products;

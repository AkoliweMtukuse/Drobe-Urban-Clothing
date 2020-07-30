import React, { useState, useContext } from "react";
import ProductContext from "../../context/products/productContext";

const ProductForm = () => {
  const productContext = useContext(ProductContext);
  const [product, setProduct] = useState({
    name: "",
    img: "",
    price: "",
    saving: "",
    type: "Men",
  });
  const { name, img, price, saving, type } = product;

  const onChange = (e) =>
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    productContext.addProduct(product);
    setProduct({
      name: "",
      img: "",
      price: "",
      saving: "",
      type: "Men",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Image"
        name="img"
        value={img}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        value={price}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Saving"
        name="saving"
        value={saving}
        onChange={onChange}
      />
      <input type="radio" name={type} value="Men" checked={type === "Men"} />{" "}
      Men{" "}
      <input
        type="radio"
        name={type}
        value="Women"
        checked={type === "Women"}
      />
      Women{" "}
      <div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ProductForm;

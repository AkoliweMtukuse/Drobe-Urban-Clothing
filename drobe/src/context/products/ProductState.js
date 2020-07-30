import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
// JUST NAMES OR CONST
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_PRODUCT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "./types";

const ProductState = (props) => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "Nike T-Shirt",
        img:
          "https://i.pinimg.com/564x/ee/5d/ff/ee5dffac018f86112fd1f5bfa015a65c.jpg",
        price: "R367",
        saving: "R200",
        type: "Men",
      },
      {
        id: 2,
        name: "Adidas T-Shirt",
        img:
          "https://i.pinimg.com/564x/3c/20/04/3c2004602b426478242f4a663e9b6df5.jpg",
        price: "R343",
        saving: "R120",
        type: "Women",
      },
      {
        id: 3,
        name: "Puma T-Shirt",
        img:
          "https://i.pinimg.com/564x/45/c8/15/45c8150ba311bd66425d7c2397254f5c.jpg",
        price: "R400",
        saving: "R219",
        type: "Men",
      },
    ],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Add Contact
  const addContact = (product) => {
    product.id = uuidv4;
    dispatch({ type: ADD_PRODUCT, payload: product });
  };
  // Delete Contact

  //Set Current Contact

  // Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ProductContext.Provider value={{ products: state.products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

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
        name: "Jordan",
        type: "Men",
        img:
          "https://cdn-images.farfetch-contents.com/14/57/35/03/14573503_22376765_1000.jpg",
        price: "R 4700.99",
        saving: "R 100.00",
      },
      {
        id: 2,
        name: "Reebok Pants",
        type: "Men",
        img:
          "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/684c5313386f4e10be03aae100d04c27_9366/Workout_Ready_Joggers_Black_FJ4063_01_standard.jpg",
        price: "R 545.99",
        saving: "R 200.00",
      },
      {
        id: 3,
        name: "Adidas Tee",
        type: "Men",
        img:
          "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/8081e54b377f49d3a1b4aaee000ace5b_9366/tky-camo-tee.jpg",
        price: "R 498.00",
        saving: "R 120.00",
      },
      {
        id: 4,
        name: "Nike",
        type: "Men",
        img:
          "https://media.thecustommovement.com/public/117615e9-308a-4e5e-9272-973d0ea1c698",
        price: "R 2390.00",
        saving: "R 50.00",
      },
      {
        id: 5,
        name: "Tommy Hilfiger",
        type: "Men",
        img: "https://i.ebayimg.com/images/g/pSsAAOSwoWVfDOmP/s-l1600.jpg",
        price: "R 640.00",
        saving: "R 67.99",
      },
      {
        id: 6,
        name: "Reebok",
        type: "Men",
        img:
          "https://i0.wp.com/www.gallivantingbean.blog/wp-content/uploads/2018/11/reebokclassic.jpg?resize=300%2C300&ssl=1",
        price: "R 3000.00",
        saving: "R 30.00",
      },
      {
        id: 7,
        name: "Adidas Maroon",
        type: "Men",
        img:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d9ccb9aac9bf4dceaa26aab200ec8f7b_9366/Flamestrike_Track_Pants_Burgundy_ED7223_21_model.jpg",
        price: "R 669.97",
        saving: "R 20.00",
      },
      {
        id: 8,
        name: "Nike Tee",
        type: "Men",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0a28ee62-f206-4af8-87ed-1182bf5efcef/sportswear-t-shirt-FPcVXK.jpg",
        price: "R 420.00",
        saving: "R 50.00",
      },
      {
        id: 9,
        name: "Adidas Sneaker",
        type: "Men",
        img:
          "http://sneakersteps.com/wp-content/uploads/thumbs_dir/CQ2995_01_standard-ohaxfxhwi0plx234px85rxqe3hw4q3tvpqsfnbl4j0.jpg",
        price: "R240.00",
        saving: "R 64.50",
      },
      {
        id: 10,
        name: "Nike Hoodie",
        type: "Men",
        img:
          "https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNSWCLBHDPBNFT_Ash_Green?qlt=70&wid=600&fmt=webp",
        price: " R1450.OO",
        saving: "R 200.00",
      },
      {
        id: 11,
        name: "Adidas",
        type: "Men",
        img:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/78ddec3aff5d439d9fd6aa8100ec4591_9366/Freedom_To_Move_Pants_Blue_EI9721_21_model.jpg",
        price: "R 16 323,57 ",
        saving: "R 35,",
      },
      {
        id: 12,
        name: "Jodan 1",
        type: "Men",
        img:
          "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/018/667/004/original/411930_01.jpg.jpeg?1549915378",
        price: "R 3164.00",
        saving: "R 50.00",
      },
      {
        id: 13,
        name: "Puma",
        type: "Men",
        img:
          "https://cdn.aboutstatic.com/file/676c623777230f9629dee5d951b2a38a?width=400&quality=75&bg=FFFFFF&brightness=0.96",
        price: "R 950.56",
        saving: "R 300.00",
      },
      {
        id: 14,
        name: "Reebok Tee",
        type: "#",
        img:
          "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2e59bd6f8f7d4af49014aa4f017c3e9e_9366/Classics_Vector_Tee_White_EC4517_01_standard.jpg",
        price: "R 2305.09",
        saving: "R 432.00",
      },
      {
        id: 15,
        name: "Nike Colors",
        type: "Men",
        img:
          "https://theawesomer.com/photos/2014/04/nike_tech_windrunner_1.jpg",
        price: "R 1010.00",
        saving: "R 10.00",
      },
      {
        id: 16,
        name: "Ozweego",
        type: "Men",
        img:
          "https://i.pinimg.com/564x/e7/ae/5e/e7ae5ea27bac51419a041080cbc50a79.jpg",
        price: "R 250.00",
        saving: "#",
      },
      {
        id: 17,
        name: "Nike",
        type: "Men",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/t0okyycbl4ympuel6svl/sportswear-club-fleece-joggers-27ggJk.jpg",
        price: "R 1400.00",
        saving: "R 320.99",
      },
      {
        id: 18,
        name: "Puma Tee",
        type: "Men",
        img:
          "https://i.pinimg.com/564x/0b/d2/95/0bd295f81728955c1adab8b9808cdea4.jpg",
        price: "R 1643.00",
        saving: "R 230.00",
      },
      {
        id: 19,
        name: "Adidas Red",
        type: "Men",
        img:
          "https://theseason.us/wp-content/uploads/2019/08/81cYdnVSD2L._UL1500_-4-768x998.jpg",
        price: "R 270.80",
        saving: "R 200.00",
      },
      {
        id: 20,
        name: "Puma RX",
        type: "Men",
        img:
          "https://caliroots.com/images/527232/large/puma-rs-x-reinvention-369579-06-white-peach-bud.jpg",
        price: "R 1340.00",
        saving: "R 30.00",
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

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

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

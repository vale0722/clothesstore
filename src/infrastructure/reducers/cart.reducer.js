import { addCart, getAllCart, removeCart } from "../services/cart.service";

const initialState = [];

export function getCar(search, paging) {
  return async function action(dispatch) {
    dispatch({ type: "car", payload: getAllCart(search, paging) });
  };
}

export function addItem(cart, item) {
  return async function action(dispatch) {
    dispatch({ type: "car", payload: addCart(cart, item) });
  };
}

export function removeItem(cart, item) {
  return async function action(dispatch) {
    dispatch({ type: "car", payload: removeCart(cart, item) });
  };
}

export function car(state = initialState, action) {
  switch (action.type) {
    case "car":
      return action.payload;
    default:
      return state;
  }
}

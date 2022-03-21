import {
  getProductsMoreSearched,
  searchProducts,
} from "../services/product.service";

const initialState = [];

export function moreSearched(setIsLoading) {
  return async function action(dispatch) {
    let response = await getProductsMoreSearched(setIsLoading);
    dispatch({ type: "products/more-searched", payload: response });
  };
}

export function queryProducts(search, paging, setIsLoading) {
  return async function action(dispatch) {
    let response = await searchProducts(search, paging, setIsLoading);
    dispatch({ type: "products/search", payload: response });
  };
}

export function products(state = initialState, action) {
  switch (action.type) {
    case "products/more-searched":
      return action.payload;
    case "products/search":
      return action.payload.results;
    default:
      return state;
  }
}

export function paging(state = initialState, action) {
  switch (action.type) {
    case "products/search":
      return action.payload.paging;
    default:
      return state;
  }
}

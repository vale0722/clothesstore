import { products, paging } from "./product.reducer";
import search from "./search.reducer";
import { combineReducers } from "redux";
import { car } from "./cart.reducer";

const rootReducer = combineReducers({
  products,
  search,
  paging,
  car,
});

export default rootReducer;

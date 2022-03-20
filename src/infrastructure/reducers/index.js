import { products, paging } from "./product.reducer";
import search from "./search.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
  search,
  paging,
});

export default rootReducer;

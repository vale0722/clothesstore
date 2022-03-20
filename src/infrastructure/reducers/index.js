import { products } from "./product.reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products
});

export default rootReducer;
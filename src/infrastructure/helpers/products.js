import { store } from "./store";
import { queryProducts } from "../reducers/product.reducer";
import { searchState } from "../reducers/search.reducer";

const fetchProducts = async (value, paginate) =>
  await store.dispatch(queryProducts(value, paginate));
const search = async (value) => await store.dispatch(searchState(value));

export const searchProducts = async (navigate, key, paginate = []) => {
  search(key).then(async () => {
    await fetchProducts(key, paginate);
    navigate(`/resultados`);
  });
};

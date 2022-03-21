import service from "./service";
import config from "../config";

export function getProductsMoreSearched(setIsLoading) {
  setIsLoading(true);
  return getProducts({
    params: {
      category: config.category_global,
    },
  })
    .then((response) => {
      setIsLoading(false);
      return response.results;
    })
    .catch((e) => {
      setIsLoading(false);
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

export function searchProducts(search, paging, setIsLoading) {
  setIsLoading(true);
  return getProducts({
    params: {
      category: config.category_global,
      limit: paging.limit,
      offset: paging.offset,
      q: search,
    },
  })
    .then((response) => {
      setIsLoading(false);
      return response;
    })
    .catch((e) => {
      setIsLoading(false);
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

export function getProducts(params) {
  return service
    .get(`/sites/${config.country}/search`, params)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

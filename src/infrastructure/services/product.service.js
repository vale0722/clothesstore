import service from "./service";
import config from "../config";

const pagingDefault = {
  limit: 50,
  offset: 0,
};

export function getProductsMoreSearched() {
  return getProducts({
    params: {
      category: config.category_global,
    },
  })
    .then((response) => {
      return response.results;
    })
    .catch((e) => {
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}

export function searchProducts(search, paging) {
  return getProducts({
    params: {
      category: config.category_global,
      limit: paging.limit,
      offset: paging.offset,
      q: search,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
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

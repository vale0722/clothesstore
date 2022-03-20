import service from "./service";
import config from "../config";

export function getProductsMoreSearched() {
    return service.get(`/sites/${config.country}/search`, {
       params: {
           category: config.category_global,
           limit: 10
       }
    }).then(response => {
        return response.data.results;
    }).catch(e => {
        const error = (e && e.message) || e.statusText;
        return Promise.reject(error);
    });
}
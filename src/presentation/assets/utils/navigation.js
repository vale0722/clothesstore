import { searchProducts } from "../../../infrastructure/helpers/products";

export const navigation = [
  {
    name: "Hombre",
    url: "/resultados",
    action: (navigate) => {
      searchProducts(navigate, "hombre");
    },
  },
  {
    name: "Mujer",
    url: "/resultados",
    action: (navigate) => {
      searchProducts(navigate, "mujer");
    },
  },
  {
    name: "Junior",
    url: "/resultados",
    action: (navigate) => {
      searchProducts(navigate, "bebes");
    },
  },
  {
    name: "Niños",
    url: "/resultados",
    action: (navigate) => {
      searchProducts(navigate, "niños");
    },
  },
  {
    name: "Accesorios",
    url: "/resultados",
    action: (navigate) => {
      searchProducts(navigate, "accesorios");
    },
  },
  {
    name: "Ofertas",
    url: "",
  },
];

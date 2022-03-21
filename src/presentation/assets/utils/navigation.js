import { searchProducts } from "../../../infrastructure/helpers/products";

export const navigation = [
  {
    name: "Hombre",
    url: "/resultados",
    action: (navigate, setIsLoading) => {
      searchProducts(navigate, "hombre", setIsLoading);
    },
  },
  {
    name: "Mujer",
    url: "/resultados",
    action: (navigate, setIsLoading) => {
      searchProducts(navigate, "mujer", setIsLoading);
    },
  },
  {
    name: "Junior",
    url: "/resultados",
    action: (navigate, setIsLoading) => {
      searchProducts(navigate, "bebes", setIsLoading);
    },
  },
  {
    name: "Niños",
    url: "/resultados",
    action: (navigate, setIsLoading) => {
      searchProducts(navigate, "niños", setIsLoading);
    },
  },
  {
    name: "Accesorios",
    url: "/resultados",
    action: (navigate, setIsLoading) => {
      searchProducts(navigate, "accesorios", setIsLoading);
    },
  },
  {
    name: "Ofertas",
    url: "",
  },
];

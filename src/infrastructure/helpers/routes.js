import React from "react";
import DashboardPage from "../../presentation/pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "../../presentation/pages/ProductsPage";

export const ROUTES = [
  {
    path: "/",
    key: "dashboard",
    element: RenderRoutes,
    routes: [
      {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        element: DashboardPage,
      },
    ],
  },
  {
    path: "/resultados",
    key: "results",
    element: ProductsPage,
  },
];

export function RenderRoutes({ routes, setIsLoading }) {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            path={route.path}
            key={route.key}
            element={
              <route.element
                setIsLoading={setIsLoading}
                props={route}
                routes={route.routes}
              />
            }
          />
        );
      })}
    </Routes>
  );
}

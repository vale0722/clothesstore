import React from "react";
import DashboardPage from "../../presentation/pages/DashboardPage";
import {Routes, Route} from "react-router-dom";

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
];

export function RenderRoutes({ routes }) {
  return (
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path}  key={route.key} element={<route.element props={route} routes={route.routes} />}>
          </Route>;
        })}
      </Routes>
  );
}
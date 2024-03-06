import type { RouteObject } from "react-router-dom";
import { HomePage } from "./pages/home.pages";

const normalRoutes: RouteObject = {
  path: "*",
  element: "",
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;

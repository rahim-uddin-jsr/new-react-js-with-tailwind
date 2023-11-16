import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

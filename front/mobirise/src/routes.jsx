import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WishList from "./pages/wishList/wishList";
import Basket from "./pages/Basket/Basket";

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }, { path: "wishList", element: <WishList /> }, { path: 'basket', element: <Basket /> }],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

// eslint-disable-next-line no-undef

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "allproducts",
        element: <PrivateRoutes>
        <AllProducts />
      </PrivateRoutes>,
      },
      {
        path: "addproducts",
        element: <PrivateRoutes>
        <AddProduct />
      </PrivateRoutes>,
      },
      {
        path: "allproducts/editproducts/:id",
        element: <PrivateRoutes>
        <EditProduct  />
      </PrivateRoutes>,
      loader: ({ params }) =>
        fetch(`http://localhost:3000/shoes/${params.id}`),
      },
    ],
  },
]);

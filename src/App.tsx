import React from "react";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Products from "./components/Products";
import Careers from "./components/Careers";
import Contactus from "./components/Contactus";
import Team from "./components/Team";
import Admin from "./components/Admin";
import ProductPage from "./components/ProductPage";
import Imageupload from "./components/Imageupload";
import RequirementPage from "./components/RequirementPage";
import Login from "./components/Login";
import DisplayTimesheet from "./components/DisplayTimesheet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/upload/:id",
    element: <Imageupload />,
  },
  {
    path: "/requirement/:id",
    element: <RequirementPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/timesheet/:id",
    element: <DisplayTimesheet />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

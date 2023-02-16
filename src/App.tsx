import React, { Fragment } from 'react';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Products from './components/Products';
import Careers from './components/Careers';
import Contactus from './components/Contactus';
import Team from './components/Team';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "/aboutus",
    element : <AboutUs />
  },
  {
    path : "/services",
    element : <Services />
  },
  {
    path : "/products",
    element : <Products />
  },{
    path : "/careers",
    element : <Careers />
  },
  {
    path :"/contactus",
    element : <Contactus />
  },
  {
    path : "/team",
    element : <Team />
  }
]);

const App = () =>{
  return(
    <RouterProvider router={router} />
  )
}

export default App;

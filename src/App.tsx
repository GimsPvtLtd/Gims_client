import React, { Fragment } from 'react';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () =>{
  return(
    <RouterProvider router={router} />
  )
}

export default App;

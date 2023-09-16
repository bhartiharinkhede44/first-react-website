import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './view/Home/Home';
import About from './view/About/About';
import Product from './view/Product/Product';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Product",
    element: <Product />,
  },
 
  

]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} />);




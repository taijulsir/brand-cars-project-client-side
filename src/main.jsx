import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Layout/Root';
import Login from './Components/Login';
import Home from './Home/Home';
import ErrorPage from './Errorpage/ErrorPage';
import AddProduct from './Components/AddProduct';
import Register from './Components/Register';
import Authprovider from './AuthProvider/AuthProvider';
import PrivateRoute from './PriivateRoute/PrivateRoute';
import BrandDetails from './Home/BrandDetails';
import Slider from './Home/Slider';
import ProductCard from './Home/ProductCard';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brandNames')
      },
      {
        path: "/brands",
        element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>
        
      },
      // {
      //   path: "/brands/:brandName",
      //   element: <Slider> </Slider>,
      //   loader: ({params}) => fetch(`http://localhost:5000/brandNames/${params.brandName}`)
      // },
      {
        path: "/brands/:brandName",
        element: <ProductCard></ProductCard>,
        loader:  ({params}) => fetch(`http://localhost:5000/brandNames/${params.brandName}`)
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,      
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)

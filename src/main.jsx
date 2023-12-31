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
import ProductCard from './Home/ProductCard';
import ProductDetails from './Home/ProductDetails';
import ProductUpdate from './Home/ProductUpdate';
import MyCart from './Components/MyCart';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://new-brand-cars.vercel.app/brandNames')
      },
      {
        path: "/brands",
        element: <BrandDetails></BrandDetails>
      },

      {
        path: "/brands/:brandName",
        element: <ProductCard></ProductCard>,
        loader: ({ params }) => fetch(`https://new-brand-cars.vercel.app/brandNames/${params.brandName}`)
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://new-brand-cars.vercel.app/cars/${params.id}`)
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://new-brand-cars.vercel.app/cars/${params.id}`)
      }
      ,
      {
        path: "/updateProduct/:id",
        element: <ProductUpdate></ProductUpdate>
      },
      {
        path: "/myCart",
        element: <PrivateRoute> <MyCart></MyCart> </PrivateRoute>
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

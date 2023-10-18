import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Layout/Root';
import Login from './Components/Login';
import Home from './Home/Home';
import ErrorPage from './Errorpage/ErrorPage';
import BrandDetails from './Home/BrandDetails';
import AddProduct from './Components/AddProduct';
import Register from './Components/Register';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage> ,
    element: <Root></Root>,
    children:[
      
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/brands.json')   
      },
      {
        path:"/brands/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ()=> fetch('/brands.json')

      },
      {
        path:"/addProduct",
        element: <AddProduct></AddProduct>
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
      <RouterProvider router={router} />
  </React.StrictMode>,
)

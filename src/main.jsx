import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Accessories from './components/Accessories/Accessories';
import Catalogue from './components/Catalogue/Catalogue';
import News from './components/News/News';
import Service from './components/Service/Service';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
    children:[
      {
        path: "/accessories",
        element:<Accessories></Accessories>
      },
      {
        path:"/catalogue",
        element:<Catalogue></Catalogue>
      },
      {
        path:"/news",
        element:<News></News>
      },
      {
        path:"/service",
        element:<Service></Service>
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

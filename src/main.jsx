import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContext from './Context/MainContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'

let router=createBrowserRouter(
  [
    {
      path:'/', //http://localhost:5173/#,
      element:<Home/>
    },
    {
      path:'/cart', //http://localhost:5173/#,
      element:<Cart/>
    },
    {
      path:'/About', //http://localhost:5173/#,
      element:<About/>
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
      <RouterProvider router={router}/>
      <ToastContainer />
    </MainContext>
  </StrictMode>,
)

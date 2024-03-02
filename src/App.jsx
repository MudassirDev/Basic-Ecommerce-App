import React, { useState } from "react"
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import { cartContext } from "./context/Cart";

function App() {
  const [cart, setCart] = useState([])

  const router = createBrowserRouter([
    {
      path: "/Basic-Ecommerce-App/",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/Basic-Ecommerce-App/about",
      element: <><Navbar /><About /><Footer /></>
    },
    {
      path: "/Basic-Ecommerce-App/login",
      element: <><Navbar /><Login /><Footer /></>
    },
    {
      path: "/Basic-Ecommerce-App/cart",
      element: <><Navbar /><Cart /><Footer /></>
    },
    {
      path: "/Basic-Ecommerce-App/account",
      element: <><Navbar /><Account /><Footer /></>
    },
    {
      path: "/Basic-Ecommerce-App/user/:username",
      element: <><Navbar /><User /><Footer /></>
    }
  ])

  return (
    <>
      <cartContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={router} />
      </cartContext.Provider>
    </>
  )
}

export default App

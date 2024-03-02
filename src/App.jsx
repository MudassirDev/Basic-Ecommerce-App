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
      path: "/",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /><Footer /></>
    },
    {
      path: "/cart",
      element: <><Navbar /><Cart /><Footer /></>
    },
    {
      path: "/account",
      element: <><Navbar /><Account /><Footer /></>
    },
    {
      path: "/user/:username",
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

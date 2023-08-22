import React from 'react';
import Register from "./pages/Register";
import Login from './pages/Login';
import Home from "./pages/Home";
import "./styles.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }, 
    {
      path: "/login",
      element: <Login />
    }, 
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
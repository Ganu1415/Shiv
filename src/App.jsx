import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Counter from './pages/Counter';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './Layout/Layout';
function App() {
  // const router = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/counter", element: <Counter /> },
  //   { path: "/about", element: <About /> },
  //   { path: "*", element: <NotFound /> },

  // ]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Common layout with header
      children: [
        { index: true, element: <Home /> }, // Same as path: ""
        { path: "counter", element: <Counter /> },
        { path: "about", element: <About /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  

    return <RouterProvider router={router} />;
  }

export default App

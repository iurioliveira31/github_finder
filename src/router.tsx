import React from 'react';
import App from './App.tsx';
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  }
]

);

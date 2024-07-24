import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LayoutWrapper } from "src/feature/Layout";
import { HomeAsync } from "src/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/home",
        element: <HomeAsync />,
      },
    ],
  },
]);

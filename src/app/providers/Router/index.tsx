import React from "react";
import { router } from "src/app/utils/router";
import { RouterProvider } from "react-router-dom";

type Props = {};

export const RouterProviders: React.FC<Props> = () => {
  return <RouterProvider router={router} />;
};

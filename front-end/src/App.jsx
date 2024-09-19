import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from  "./login_page/LoginPage";

import Homepage from "./Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage  />,

  },
  {
    path:  "/login",
    element: <LoginPage />

  }
]);

export default function App() {
  return (
    
      <RouterProvider router = {router} />
    
  );
}
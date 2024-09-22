import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from  "./login_page/LoginPage";

import Homepage from "./Homepage";
import Event_Page from "./Event_Page/Event_Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage  />,

  },
  {
    path:  "/login",
    element: <LoginPage />

  },
  {
    path: "/event_page",
    element: <Event_Page  />

  }
]);

export default function App() {
  return (
    
      <RouterProvider router = {router} />
    
  );
}
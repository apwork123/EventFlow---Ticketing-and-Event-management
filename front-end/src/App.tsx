import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from  "./login_page/LoginPage";

import Homepage from './homepage/Homepage';
import Eventpagetest from "./Event_Page/Event-page-test";
import EventOrganizerDashboard from "./event-organizer-dashboard/event-organizer-dashboard";
import SubcategoryLandingPage from "./subcategory page/subcategory-landing-page";


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
    element: <Eventpagetest />

  },
  {
    path: "/org_dash",
    element: <EventOrganizerDashboard />
  },
  {
    path: "/sub",
    element: <SubcategoryLandingPage />
  }
]);

export default function App() {
  return (
    
      <RouterProvider router = {router} />
    
  );
}
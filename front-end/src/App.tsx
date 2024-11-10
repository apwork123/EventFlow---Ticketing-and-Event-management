// src/App.tsx

import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EventsList from './components/eventsList.js';
import LoginPage from "./login_page/LoginPage";
import Homepage from './homepage/Homepage';
import Eventpagetest from "./Event_Page/Event-page-test";
import EventOrganizerDashboard from "./event-organizer-dashboard/event-organizer-dashboard";
import SubcategoryLandingPage from "./subcategory page/subcategory-landing-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <h1>Event List</h1>
        <EventsList />
      </div>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/event_page",
    element: <Eventpagetest />,
  },
  {
    path: "/org_dash",
    element: <EventOrganizerDashboard />,
  },
  {
    path: "/sub",
    element: <SubcategoryLandingPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

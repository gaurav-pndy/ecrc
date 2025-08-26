import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import MeetTheTeam from "./pages/MeetTheTeam";
import WhatWeDo from "./pages/WhatWeDo";
import EducationAndTrainings from "./pages/EducationAndTrainings";
import CareersPage from "./pages/CareersPage";
import Gallery from "./pages/Gallery";
import DonatePage from "./pages/DonatePage";
import ContactPage from "./pages/ContactPage";
import OtherActivites from "./pages/OtherActivites";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ecrc-overview",
          element: <Overview />,
        },
        {
          path: "/meet-the-team",
          element: <MeetTheTeam />,
        },
        {
          path: "/what-we-do",
          element: <WhatWeDo />,
        },
        {
          path: "/education-and-trainings",
          element: <EducationAndTrainings />,
        },
        {
          path: "/jobs-and-careers",
          element: <CareersPage />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/pay-or-donate",
          element: <DonatePage />,
        },
        {
          path: "/contact-us",
          element: <ContactPage />,
        },
        {
          path: "/other-activities",
          element: <OtherActivites />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

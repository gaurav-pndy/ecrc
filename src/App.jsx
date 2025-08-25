import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import MeetTheTeam from "./pages/MeetTheTeam";
import WhatWeDo from "./pages/WhatWeDo";
import EducationAndTrainings from "./pages/EducationAndTrainings";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

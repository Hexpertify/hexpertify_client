import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layout/AppLayout";
import AboutUs from "../pages/aboutUs";
import Home from "../pages/home";
import ContactUs from "../pages/contactUs";
import Services from "../pages/services";
import ServiceDetails from "../pages/services/ServiceDetails";
import Consultant from "../pages/consultants";
import Signup from "../pages/authentication/signup";
import Login from "../pages/authentication/login";
import Profile from "../pages/profile";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "services/:id/consultant/:consultantId",
        element: <Consultant />,
      },
      {
        path: "my-profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

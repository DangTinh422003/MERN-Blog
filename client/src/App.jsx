import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

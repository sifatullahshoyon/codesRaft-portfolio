import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Faq from "../pages/Faq/Faq";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/faq", Component: Faq },
      { path: "/blog", Component: Blogs },
    ],
  },
]);

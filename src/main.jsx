import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

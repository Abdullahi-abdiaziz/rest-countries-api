import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DetailedCard from "./DetailedCard";
import "./index.css";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App className="countries" />,
  },
  {
    path: "/:countryName",
    element: <DetailedCard/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

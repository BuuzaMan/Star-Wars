import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import PersonPage from "./PersonPage";
import Cards from "../Cards";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element:<Cards />
        },
        {
          path: ":name",
          element:<PersonPage />
        }
      ]
    },
]);

export default router;
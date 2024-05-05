import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import NavState from "./context/NavState";
import FormState from "./context/FormState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormState>
      <NavState>
        <RouterProvider router={router} />
      </NavState>
    </FormState>
  </React.StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Section from "../components/Home/Section";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Section />,
      },
    ],
  },
]);

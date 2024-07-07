import { createBrowserRouter } from "react-router-dom";
import Ver1 from "../components/Ver1";
import Layout from "../layout/layout";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Ver1 />,
      },
      {
        path: "/ver2",
        element: <Ver2Page />,
      },
    ],
  },
]);

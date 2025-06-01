import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShowAllTasks from "./components/ShowTasks/ShowAllTasks";
import ShowStarTasks from "./components/ShowTasks/ShowStarTasks";
import BodyForm from "./components/FormCard/BodyForm/BodyForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ShowAllTasks />,
      },
      {
        path: "starred",
        element: <ShowStarTasks />,
      },
      {
        path: "empty",
        element: <BodyForm />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

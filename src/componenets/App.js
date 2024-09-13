import QuizSelectionPage from "../pages/QuizSelectionPage";
import QuizPage from "../pages/QuizPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <QuizSelectionPage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

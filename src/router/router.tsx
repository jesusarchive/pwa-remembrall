import { createBrowserRouter } from "react-router-dom";

import ErrorBoundary from "../components/error-boundary/error-boundary";
import GamePage from "../pages/game-page";
import HomePage from "../pages/home-page";

export const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/game",
        Component: GamePage,
        ErrorBoundary: ErrorBoundary,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

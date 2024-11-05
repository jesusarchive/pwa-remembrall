import { createBrowserRouter, Navigate } from "react-router-dom";

import ErrorBoundary from "@/components/error-boundary";
import GamePage from "@/pages/game-page";
import HomePage from "@/pages/home-page";

export const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        Component: HomePage,
        ErrorBoundary: ErrorBoundary,
      },
      {
        path: "/game",
        Component: GamePage,
        ErrorBoundary: ErrorBoundary,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

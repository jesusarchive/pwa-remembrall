import { createBrowserRouter, Navigate } from "react-router-dom";

import ErrorBoundary from "@/components/error-boundary";
import GamePage from "@/pages/game-page";
import HomePage from "@/pages/home-page";

import AuthGuard from "./auth-guard";

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
        element: (
          <AuthGuard>
            <GamePage />
          </AuthGuard>
        ),
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

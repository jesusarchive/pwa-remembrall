import { RouterProvider } from "react-router-dom";

import UserProvider from "./providers/user-provider/user-provider";
import router from "./router";

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

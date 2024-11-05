import "./index.css";

import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";

import App from "./app.tsx";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

createRoot(document.getElementById("root")!).render(<App />);

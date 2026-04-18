import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import YggdrasilNotes from "./YggdrasilNotes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <YggdrasilNotes />
  </StrictMode>
);

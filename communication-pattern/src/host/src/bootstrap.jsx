import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import RemoteApp1 from "remote_one";
import RemoteApp2 from "remote_two";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <RemoteApp1 />
    <RemoteApp2 />
  </StrictMode>
);

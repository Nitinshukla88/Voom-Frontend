import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserContext from "./context/UserContext";
import { CaptainContext } from "./context/CaptainContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CaptainContext>
        <UserContext>
          <App />
        </UserContext>
      </CaptainContext>
    </StrictMode>
  </BrowserRouter>
);

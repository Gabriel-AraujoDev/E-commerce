import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import "./css/index.css";
import Home from "./pages/home";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById("featured-products-root")).render(
    <StrictMode>
        <Home />
    </StrictMode>
);
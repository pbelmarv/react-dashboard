import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Importamos React BrowserRouter de react-router-dom
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Asignamos Browser Router a nuestro proyecto */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

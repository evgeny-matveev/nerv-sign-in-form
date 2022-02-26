import { StrictMode } from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    hydrate(
        <StrictMode>
            <App />
        </StrictMode>,
        document.getElementById("root")
    );
} else {
    render(
        <StrictMode>
            <App />
        </StrictMode>,
        document.getElementById("root")
    );
}
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css"; // import bootstrap
import "font-awesome/css/font-awesome.css"; // import fontawesome
import "./fontawesome-free-6.4.2-web/css/all.css"; // import fontawesome
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        tabIndex="0"
        data-bs-toggle="scrollspy"
        className="scrollspy-example m-0 p-0"
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FilterProvider, CartProvider } from "./context";
import { ScrollToTop } from "./components/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer autoClose={3000} position="bottom-right" />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);

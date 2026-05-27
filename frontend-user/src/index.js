import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetail from "./pages/ProductPage/ProductDetail";
import BlogPage from "./pages/BlogPage/BlogPage";
import AppProvider from "./context/AppContext";
import CartPage from "./pages/CartPage/CartPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserPage from "./pages/UserPage/UserPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserPage />} />
            <Route path="/product/list" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </App>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

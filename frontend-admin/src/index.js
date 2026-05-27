import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import ProductPage from "./pages/ProductPage/ProductPage";
import UserPage from "./pages/UserPage/UserPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogCreate from "./pages/BlogPage/Blog/BlogCreate";
import OrderPage from "./pages/OrderPage/OrderPage";
import BlogUpdate from "./pages/BlogPage/Blog/BlogUpdate";
import ProductCreate from "./pages/ProductPage/Product/ProductCreate";
import ProductUpdate from "./pages/ProductPage/Product/ProductUpdate";
import UserCreate from "./pages/UserPage/User/UserCreate";
import UserUpdate from "./pages/UserPage/User/UserUpdate";
import LoginPage from "./pages/AuthPage/LoginPage";
import MainLayout from "./layout/MainLayout";
import CategoryPage from "./pages/ProductPage/CategoryPage";
import CategoryCreate from "./pages/ProductPage/Category/CategoryCreate";
import AppProvider from "./context/AppContext";
import BrandPage from "./pages/ProductPage/BrandPage";
import BrandCreate from "./pages/ProductPage/Brand/BrandCreate";
import AdminRoute from "./routes/AdminRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<AdminRoute />}>
              <Route element={<MainLayout />}>
                <Route
                  path="/"
                  element={<Navigate to="/admin/dashboard" replace />}
                />
                <Route path="/admin/dashboard" element={<DashBoard />} />
                {/* user */}
                <Route path="/admin/users" element={<UserPage />} />
                <Route path="/admin/users/create" element={<UserCreate />} />
                <Route
                  path="/admin/users/update/:id"
                  element={<UserUpdate />}
                />
                {/* blog */}
                <Route path="/admin/blogs" element={<BlogPage />} />
                <Route path="/admin/blogs/create" element={<BlogCreate />} />
                <Route
                  path="/admin/blogs/update/:id"
                  element={<BlogUpdate />}
                />
                {/* product */}
                <Route path="/admin/brands" element={<BrandPage />} />
                <Route path="/admin/brands/create" element={<BrandCreate />} />
                <Route path="/admin/categories" element={<CategoryPage />} />
                <Route
                  path="/admin/categories/create"
                  element={<CategoryCreate />}
                />
                <Route path="/admin/products" element={<ProductPage />} />
                <Route
                  path="/admin/products/create"
                  element={<ProductCreate />}
                />
                <Route
                  path="/admin/products/update/:id"
                  element={<ProductUpdate />}
                />

                <Route path="/admin/orders" element={<OrderPage />} />
              </Route>
            </Route>
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

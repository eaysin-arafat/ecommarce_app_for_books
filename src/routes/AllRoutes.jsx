import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import {
  CartPage,
  DashboardPage,
  HomePage,
  Login,
  OrdePage,
  ProductDetail,
  ProductList,
  Register,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrdePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default AllRoutes;

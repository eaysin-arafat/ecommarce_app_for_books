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
  PageNotFound,
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

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
};

export default AllRoutes;

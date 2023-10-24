import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ProductDetail, ProductList } from "../pages";

const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Routes>
    </Fragment>
  );
};

export default AllRoutes;

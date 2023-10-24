/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  const initialProductList = (products) => {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  };

  const value = {
    productList: state.productList,
    initialProductList,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};

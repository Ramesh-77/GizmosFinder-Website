import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Samsumg",
      price: "Rs. 1000",
      category: "Phone",
      ratings: "5",
    },
    {
      id: "2",
      name: "Apple",
      price: "Rs. 2000",
      category: "Phone",
      ratings: "4",
    },
    {
      id: "3",
      name: "Apple Earpods",
      price: "Rs. 1500",
      category: "Earpod",
      ratings: "3",
    },
    {
      id: "4",
      name: "Samsumg Z-flip",
      price: "Rs. 11000",
      category: "Tablet",
      ratings: "3",
    },
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

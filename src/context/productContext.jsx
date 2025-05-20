import React, { createContext, useEffect, useState } from "react";
import api from "../utils/api.js";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // ! Hangi endpoint'e istek atılacağını belirle
    const url =

      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;

    // Api'den urun verilerini al

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  return (

    <ProductContext.Provider

      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };

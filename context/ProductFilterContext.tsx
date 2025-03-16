"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ContextType = {
  productData: ProductDataType[] | undefined;
  handleProductData: (id: string) => void;
  setOriginalData: (data: ProductDataType[]) => void;
  loading: boolean;
  selectedCategory: string;
};

const ProductFilterContext = createContext<ContextType | undefined>(undefined);

const ProductFilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // keep original data here
  const [originalData, setOriginalData] = useState<
    ProductDataType[] | undefined
  >(undefined);
  // filtered data
  const [productData, setProductData] = useState<ProductDataType[] | undefined>(
    undefined
  );
  // loading state
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // update productData when originalData is set
  useEffect(() => {
    if (originalData) {
      setProductData(originalData);
      setLoading(false);
    }
  }, [originalData]);

  // handle product filter
  const handleProductData = (id: string) => {
    if (!originalData) return;
    setLoading(true);
    setSelectedCategory(id); // Update the selected category

    setTimeout(() => {
      if (id === "all") {
        setProductData(originalData);
      } else {
        const filteredData = originalData.filter(
          (item) => item.categoryId === id
        );
        setProductData(filteredData);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <ProductFilterContext.Provider
      value={{
        productData,
        handleProductData,
        setOriginalData,
        loading,
        selectedCategory,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export default ProductFilterContextProvider;

// use context
export const useProductFilterContext = () => {
  const context = useContext(ProductFilterContext);
  if (!context) {
    throw new Error(
      "useProductFilterContext must be used within ProductFilterContext"
    );
  }
  return context;
};

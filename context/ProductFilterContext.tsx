"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ContextType = {
  productData: ProductDataType[] | undefined;
  handleProductData: (id: string) => void;
  setOriginalData: (data: ProductDataType[]) => void;
  loading: boolean;
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

    setLoading(true); // Set loading to true while filtering

    // dealy for loading state
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
      value={{ productData, handleProductData, setOriginalData, loading }}
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

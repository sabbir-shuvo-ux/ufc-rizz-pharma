import ProductFilterContextProvider from "@/context/ProductFilterContext";
import ButtonSlider from "./ButtonSlider";
import ProductSlider from "./ProductSlider";

const getData = async <T,>(url: string): Promise<T> => {
  try {
    const res = await fetch(`${process.env.DOMAIN}${url}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const ProductSliderContainer = async () => {
  try {
    const [categoriesData, productData] = await Promise.all([
      getData<CategoriesDataType[]>("/local-data/product-categories.json"),
      getData<ProductDataType[]>("/local-data/products.json"),
    ]);

    return (
      <ProductFilterContextProvider>
        <div className="pt-[2.81rem]">
          {/* Product categories button slider */}
          <ButtonSlider data={categoriesData} />

          {/* Product card list slider */}
          <ProductSlider data={productData} />
        </div>
      </ProductFilterContextProvider>
    );
  } catch (error) {
    return <p className="text-red-500">Failed to load product data.</p>;
  }
};

export default ProductSliderContainer;

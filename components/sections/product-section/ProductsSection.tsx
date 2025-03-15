import SectionTitle from "@/components/ui/SectionTitle";
import ProductSliderContainer from "@/components/sections/product-section/ProductSliderContainer";

const ProductsSection = () => {
  return (
    <section className="bg-[url('/product-cover.jpg')] pt-[9.56rem] w-full min-h-screen h-full relative bg-no-repeat bg_size_full">
      <div className="container">
        {/* section title */}
        <SectionTitle
          beforeText="Solutions for Your "
          gradientText="Unique "
          afterText="Health Goals"
        />

        {/* Product Container */}
        <ProductSliderContainer />
      </div>
    </section>
  );
};

export default ProductsSection;

import AddSection from "@/components/sections/AddSection";
import CategorySection from "@/components/sections/CategorySection";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/product-section/ProductsSection";
import ReviewSection from "@/components/sections/testimonials-section/ReviewSection";
import SupportSection from "@/components/sections/SupportSection";
import SearchBox from "@/components/ui/InputBox";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen h-full relative bg-[url('/Hero1.jpg')] bg-no-repeat bg_size_full max-[1281px]:!bg-cover max-[1281px]:bg-right max-[769px]:bg-[78%_100%]">
        <HeroSection />
        <div className="pt-[9.2rem] max-md:px-4 pb-[4.56rem]">
          <SearchBox
            iconPath="/search_icon.svg"
            label="Search Icon"
            placeholder="Search by product/treatment"
            inputClassName="max-[769px]:text-base"
          />
        </div>
      </div>
      <div className="bg-[url('/category-cover.jpg')] w-full min-h-screen h-full relative bg-no-repeat bg_size_full">
        <CategorySection />
        <SupportSection />
      </div>
      {/* Product Section */}
      <ProductsSection />
      {/* Add Section */}
      <AddSection />
      {/* testimonials */}
      <ReviewSection />
    </>
  );
};

export default Home;

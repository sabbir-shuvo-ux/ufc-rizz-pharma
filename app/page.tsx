import CategorySection from "@/components/sections/CategorySection";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/product-section/ProductsSection";
import SupportSection from "@/components/sections/SupportSection";
import SearchBox from "@/components/ui/SearchBox";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen h-full relative bg-[url('/Hero1.jpg')] bg-no-repeat bg_size_full">
        <HeroSection />
        <div className="pt-[9.2rem] pb-[4.56rem]">
          <SearchBox
            iconPath="/search_icon.svg"
            label="Search Icon"
            placeholder="Search by product/treatment"
          />
        </div>
      </div>
      <div className="bg-[url('/category-cover.jpg')] w-full min-h-screen h-full relative bg-no-repeat bg_size_full">
        <CategorySection />
        <SupportSection />
      </div>
      {/* Product Section */}
      <ProductsSection />
    </>
  );
};

export default Home;

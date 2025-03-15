import ButtonSlider from "./ButtonSlider";
import ProductSlider from "./ProductSlider";

const CategoriesData: CategoriesDataType[] = [
  {
    id: "all_01",
    label: "All",
  },
  {
    id: "Best_Selling_Products_02",
    label: "Best Selling Products",
  },
  {
    id: "Weight_Loss_03",
    label: "Weight Loss",
  },
  {
    id: "beauty_and_hair_loss_04",
    label: "Beauty And Hair Loss",
  },
  {
    id: "testosterone_hrt_05",
    label: "Testosterone/HRT",
  },
  {
    id: "sexual_health_06",
    label: "Sexual Health",
  },
  {
    id: "all_01",
    label: "All",
  },
  {
    id: "Best_Selling_Products_02",
    label: "Best Selling Products",
  },
  {
    id: "Weight_Loss_03",
    label: "Weight Loss",
  },
  {
    id: "beauty_and_hair_loss_04",
    label: "Beauty And Hair Loss",
  },
  {
    id: "testosterone_hrt_05",
    label: "Testosterone/HRT",
  },
  {
    id: "sexual_health_06",
    label: "Sexual Health",
  },
  {
    id: "all_01",
    label: "All",
  },
  {
    id: "Best_Selling_Products_02",
    label: "Best Selling Products",
  },
  {
    id: "Weight_Loss_03",
    label: "Weight Loss",
  },
  {
    id: "beauty_and_hair_loss_04",
    label: "Beauty And Hair Loss",
  },
  {
    id: "testosterone_hrt_05",
    label: "Testosterone/HRT",
  },
  {
    id: "sexual_health_06",
    label: "Sexual Health",
  },
];

const ProductSliderContainer = () => {
  return (
    <div className="pt-[2.81rem]">
      <ButtonSlider data={CategoriesData} />
      <ProductSlider />
    </div>
  );
};

export default ProductSliderContainer;

import ProductFilterContextProvider from "@/context/ProductFilterContext";
import ButtonSlider from "./ButtonSlider";
import ProductSlider from "./ProductSlider";

const CategoriesData: CategoriesDataType[] = [
  {
    id: "all",
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
    id: "all",
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
    id: "all",
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

const productData: ProductDataType[] = [
  {
    id: "1",
    img: "/Retarutide.png",
    label: "Retarutide",
    priceText: "$39.99/per month",
    badgeType: "LIGHT",
    categoryId: "Weight_Loss_03",
  },
  {
    id: "2",
    img: "/glow.png",
    label: "Lyopholized Glow (GHK-CU/ BPC-157/TB-500)",
    priceText: "$39.99/per month",
    badgeType: "LIGHT",
    categoryId: "Best_Selling_Products_02",
  },
  {
    id: "3",
    img: "/compounded-sermorelin.png",
    label: "Compounded Sermorelin 15mg",
    priceText: "Starting at $179 Monthly + $45 Physician consult",
    badgeType: "DARK",
    categoryId: "beauty_and_hair_loss_04",
  },
  {
    id: "4",
    img: "/Ipamorelin.png",
    label: "2X CJC / Ipamorelin",
    priceText:
      "Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge",
    categoryId: "Best_Selling_Products_02",
  },
  {
    id: "5",
    img: "/Lyopholized-Oxytocin.png",
    label: "Lyopholized Oxytocin",
    priceText: "$39.99/per month",
    categoryId: "beauty_and_hair_loss_04",
  },
  {
    id: "6",
    img: "/Finasteride.png",
    label: "Lyopholized Finasteride 1mg",
    priceText: "$39.99/per month",
    badgeType: "DARK",
    isImgBig: true,
    categoryId: "sexual_health_06",
  },
  {
    id: "7",
    img: "/Compounded-NAD.png",
    label: "Compounded NAD+ 1000 mg",
    priceText: "Starting at $179 Monthly + $45 Physician consult",
    categoryId: "Weight_Loss_03",
  },
  {
    id: "8",
    img: "/Lyopholized-PT.png",
    label: "Lyopholized PT- 141 10mg",
    priceText:
      "Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge",
    badgeType: "DARK",
    categoryId: "testosterone_hrt_05",
  },
];

const ProductSliderContainer = () => {
  return (
    <ProductFilterContextProvider>
      <div className="pt-[2.81rem]">
        {/* product categories button slider */}
        <ButtonSlider data={CategoriesData} />

        {/* product card list slider */}
        <ProductSlider data={productData} />
      </div>
    </ProductFilterContextProvider>
  );
};

export default ProductSliderContainer;

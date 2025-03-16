"use client";
import ButtonSliderNavigation from "@/components/sections/product-section/ButtonSliderNavigation";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useProductFilterContext } from "@/context/ProductFilterContext";
import { cn } from "@/lib/utils";

type Props = {
  data: CategoriesDataType[];
};

const ButtonSlider = ({ data }: Props) => {
  const { handleProductData, selectedCategory } = useProductFilterContext();

  return (
    <Carousel className="w-full max-w-[calc(100%_-_86px)]">
      {/* carousel items */}
      <CarouselContent className="-ml-1">
        {data?.map((item, index) => (
          <CarouselItem key={index} className="pl-3 basis-auto">
            <Button
              onClick={() => handleProductData(item.id)}
              variant={"outline"}
              size={"secondary"}
              className={cn(
                "py-5 px-[32px]",
                selectedCategory === item.id ? "bg-[#E1C06E] text-black" : null
              )}
            >
              {item.label}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* navigations buttons */}
      <ButtonSliderNavigation />
    </Carousel>
  );
};

export default ButtonSlider;

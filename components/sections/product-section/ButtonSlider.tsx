import ButtonSliderNavigation from "@/components/sections/product-section/ButtonSliderNavigation";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Props = {
  data: CategoriesDataType[];
};

const ButtonSlider = ({ data }: Props) => {
  return (
    <Carousel className="w-full max-w-[calc(100%_-_86px)]">
      {/* carousel items */}
      <CarouselContent className="-ml-1">
        {data?.map((item, index) => (
          <CarouselItem key={index} className="pl-3 basis-auto">
            <Button
              variant={"outline"}
              size={"secondary"}
              className="py-5 px-[32px]"
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

"use client";

import {
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";

const ButtonSliderNavigation = () => {
  const { canScrollPrev } = useCarousel();

  return (
    <>
      {canScrollPrev && (
        <CarouselPrevious className="px-[36px] py-[14px] w-fit max-w-[86px] h-[65px] left-0 bg-[rgba(34,36,45,1)] cursor-pointer" />
      )}
      <CarouselNext className="cursor-pointer px-[36px] py-[14px] w-fit max-w-[86px] h-[65px] -right-[85px]" />
    </>
  );
};

export default ButtonSliderNavigation;

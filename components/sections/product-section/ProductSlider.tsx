"use client";

import ProductCard from "@/components/sections/product-section/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProductFilterContext } from "@/context/ProductFilterContext";
import { useEffect } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

type Props = {
  data: ProductDataType[];
};

const ProductSlider = ({ data }: Props) => {
  const { setOriginalData, productData, loading } = useProductFilterContext();

  useEffect(() => {
    if (data.length > 0) {
      setOriginalData(data);
    }
  }, [data.length]);

  return (
    <div className="pb-[16.88rem] pt-[4.12rem]">
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-4 gap-x-[30px] gap-y-[18px]">
                  {productData?.map((item, index) => (
                    <ProductCard
                      key={index}
                      img={item.img}
                      label={item.label}
                      priceText={item.priceText}
                      badgeType={item?.badgeType}
                      isImgBig={item?.isImgBig}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="top-auto left-[45%] -translate-x-[45%] -bottom-[124px] h-[3.75rem] w-[3.75rem] bg-[rgba(225,192,110,1)] text-[rgba(31,31,31,1)] border-none" />
          <CarouselNext className="top-auto left-[55%] -translate-x-[55%] -bottom-[124px] h-[3.75rem] w-[3.75rem] bg-[rgba(225,192,110,1)] text-[rgba(31,31,31,1)] border-none" />
        </Carousel>
      )}
    </div>
  );
};

export default ProductSlider;

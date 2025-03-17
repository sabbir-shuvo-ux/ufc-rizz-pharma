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
import { chunkData } from "@/lib/chunkData";

type Props = {
  data: ProductDataType[];
};

const ProductSlider = ({ data }: Props) => {
  const { setOriginalData, productData, loading } = useProductFilterContext();

  useEffect(() => {
    if (data.length > 0) {
      setOriginalData(data);
    }
  }, [data, data.length, setOriginalData]);

  const productChunks = productData ? chunkData(productData, 8) : [];

  return (
    <div className="pb-[16.88rem] pt-[4.12rem]">
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <Carousel className="w-full">
          <CarouselContent>
            {productChunks?.map((chunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-[586px]:!grid-cols-1 justify-center gap-x-[30px] gap-y-[18px]">
                  {chunk?.map((item, index) => (
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

          <CarouselPrevious className="top-auto left-[45%] -translate-x-[45%] -bottom-[124px] h-[3.75rem] w-[3.75rem] bg-[rgba(225,192,110,1)] text-[rgba(31,31,31,1)] border-none max-md:left-1/5" />
          <CarouselNext className="top-auto left-[55%] -translate-x-[55%] -bottom-[124px] h-[3.75rem] w-[3.75rem] bg-[rgba(225,192,110,1)] text-[rgba(31,31,31,1)] border-none max-md:left-[80%]" />
        </Carousel>
      )}
    </div>
  );
};

export default ProductSlider;

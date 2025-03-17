import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-[586px]:!grid-cols-1 justify-center gap-x-[30px] gap-y-[18px]">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton
          key={index}
          className="max-w-[270px] rounded-[12px] bg-[rgba(49,65,140,0.50)] w-full min-h-[262px] mx-auto"
        >
          <div className="flex items-center gap-6 py-5 pl-10 pr-4 overflow-hidden">
            <Skeleton className="w-[70px] h-[157px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className="-w-[121px] h-[22px]" />
              <Skeleton className="w-[121px] h-[22px]" />
              <Skeleton className="w-[121px] h-[22px]" />
            </div>
          </div>
          <Skeleton className="h-[65px] rounded-none flex gap-4 items-center justify-between pl-6">
            <Skeleton className="w-full overflow-hidden h-[20px]" />
            <Skeleton className="overflow-hidden h-full w-[87px] rounded-none" />
          </Skeleton>
        </Skeleton>
      ))}
    </div>
  );
};

export default ProductCardSkeleton;

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = Pick<
  ProductDataType,
  "badgeType" | "isImgBig" | "img" | "label" | "priceText"
>;

const ProductCard = ({ badgeType, img, label, priceText, isImgBig }: Props) => {
  return (
    <div className="max-w-[270px] rounded-[12px] bg-[rgba(49,65,140,0.30)] relative w-full min-h-[262px]">
      {badgeType && (
        <span
          className={cn(
            "text-[13px] text-white rounded-tr-[12px] rounded-bl-[12px] inline-flex justify-center items-center leading-[15.6px] pt-[5px] px-[15.5px] pb-[7px] top-0 right-0 absolute bg-[linear-gradient(269deg,#A75356_1.04%,#D78C6C_98.57%)]",
            badgeType === "DARK" &&
              "bg-[linear-gradient(180deg_,_rgba(108,34,29,0.30)_0%_,_rgba(149,65,57,0.30)_100%)] border-b-[.5px] border-l-[.5px] border-[#A75356]"
          )}
        >
          {badgeType === "LIGHT" ? "Research use only" : "Recurring Plan"}
        </span>
      )}

      <div
        className={cn(
          "flex items-center gap-6 py-5 pl-10 pr-4 overflow-hidden",
          isImgBig && "pb-0 pt-10 pl-0"
        )}
      >
        <Image
          src={img}
          alt={label}
          title={label}
          width={70}
          height={157}
          className="w-auto h-[157px]"
        />

        <h4 className="text-lg font-neue-montreal-medium leading-[1.35rem] bg-gradient-to-b from-[#c1842d] to-[#ecc974] bg-clip-text text-transparent">
          {label}
        </h4>
      </div>
      <div className="w-full h-[65px] bg-[rgba(31,31,31,0.30)] flex pl-6 justify-between items-center gap-4">
        <h5 className="text-white text-[12px]">{priceText}</h5>
        <Button variant={"cart_button"} size={"initial"}>
          <Image
            src={"/Icon-dashboard.svg"}
            alt="Add To Cart Button Icon"
            title="Add To Cart"
            height={24}
            width={24}
          />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

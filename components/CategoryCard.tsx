import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  isSmall?: boolean;
  className?: string;
  colorCode?: string;
} & Omit<CategoryItemType, "id">;

const CategoryCard = ({
  img,
  imgOverlay = "/portrait-fitness-people-overlay.png",
  imgOverlayWidth = 310,
  imgOverlayHeight = 305,
  label,
  isSmall = false,
  className,
  colorCode,
}: Props) => {
  return (
    <div
      className={cn(
        "relative isolate bg-gradient-to-br mb-[30px] from-red-400 to-indigo-300 rounded-3xl overflow-hidden group",
        isSmall ? "h-[376px]" : "h-[450px]",
        className
      )}
      style={{
        background: `linear-gradient(${colorCode})`,
      }}
    >
      <Image
        className={cn(
          "right-0 top-[145px] absolute z-10",
          isSmall && "top-[11px]"
        )}
        src={imgOverlay}
        alt={label + "'s overlay"}
        width={imgOverlayWidth}
        height={imgOverlayHeight}
      />
      <div className="relative z-20 max-w-[300PX] w-full h-full ml-auto">
        <Image className="object-fill" src={img} alt={label} fill />
      </div>
      <Link href={"/"}>
        <span className="absolute inset-0 z-40"></span>
        <h3 className="w-40 left-[24px] top-[24px] absolute justify-start text-white text-4xl font-medium font-neue-montreal-medium leading-10 group-hover:underline z-30">
          {label}
        </h3>
      </Link>
    </div>
  );
};

export default CategoryCard;

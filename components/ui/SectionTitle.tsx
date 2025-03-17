import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  gradientText?: string;
  afterText?: string;
  beforeText?: string;
  gradientClassName?: string;
};

const SectionTitle = ({
  afterText,
  beforeText,
  className,
  gradientText,
  gradientClassName,
}: Props) => {
  return (
    <h2
      className={cn(
        "text-white font-impact text-5xl leading-[3.6rem] capitalize text-center max-lg:text-[clamp(1.8rem,5vw,2.5rem)] max-lg:leading-[1.2]",
        className
      )}
    >
      {beforeText}
      <span
        className={cn(
          "bg-gradient-to-b from-[#C1842D] to-[#ECC974] bg-clip-text text-transparent",
          gradientClassName
        )}
      >
        {gradientText}
      </span>
      {afterText}
    </h2>
  );
};

export default SectionTitle;

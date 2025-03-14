import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  gradientText?: string;
  afterText?: string;
  beforeText?: string;
};

const SectionTitle = ({
  afterText,
  beforeText,
  className,
  gradientText,
}: Props) => {
  return (
    <h2
      className={cn(
        "text-white font-impact text-5xl leading-[3.6rem] capitalize",
        className
      )}
    >
      {beforeText}

      <span className="bg-gradient-to-b from-[#C1842D] to-[#ECC974] bg-clip-text text-transparent block">
        {gradientText}
      </span>
      {afterText}
    </h2>
  );
};

export default SectionTitle;

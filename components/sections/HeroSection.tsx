import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";

const HeroSection = () => {
  return (
    <section className="container">
      <div className="max-w-[547px] pt-[15rem] flex gap-[2.12rem] max-[769px]:gap-6 flex-col">
        <SectionTitle
          beforeText="Prescription treatments for your"
          gradientText="health goals"
          className="text-[5rem] leading-24 text-left max-[1281px]:text-[clamp(2rem,10vw,4rem)] max-[769px]:text-[clamp(2rem,10vw,3rem)] max-[769px]:max-w-[400px] max-[769px]:leading-[1.2]"
          gradientClassName="block"
        />

        <Button
          variant={"secondary"}
          size={"secondary"}
          className="max-[769px]:text-base"
        >
          Find my treatment
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

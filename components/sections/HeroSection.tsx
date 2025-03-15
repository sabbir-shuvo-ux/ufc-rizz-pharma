import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";

const HeroSection = () => {
  return (
    <section className="container">
      <div className="max-w-[547px] pt-[15rem] flex gap-[2.12rem] flex-col">
        <SectionTitle
          beforeText="Prescription treatments for your"
          gradientText="health goals"
          className="text-[5rem] leading-24 text-left"
          gradientClassName="block"
        />

        <Button variant={"secondary"} size={"secondary"}>
          Find my treatment
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container">
      <div className="max-w-[547px] pt-[15rem] flex gap-[2.12rem] flex-col">
        <h2 className="text-white font-impact text-[5rem] leading-24 capitalize">
          Prescription treatments for your{" "}
          <span className="bg-gradient-to-b from-[#C1842D] to-[#ECC974] bg-clip-text text-transparent block">
            health goals
          </span>
        </h2>

        <Button variant={"secondary"} size={"secondary"}>
          Find my treatment
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

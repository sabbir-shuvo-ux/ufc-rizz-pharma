import FooterBotttom from "./FooterBotttom";
import FooterCredit from "./FooterCredit";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="pt-[80px] bg-[#1C1C1C] bg-[linear-gradient(180deg_,_rgba(61,85,204,0.70)_0%_,_rgba(31,31,31,0.10)_100%)]">
      <div className="container flex justify-between">
        {/* footer left form box */}
        <FooterLeft />

        <div className="mt-[40px]">
          {/* Footer Right */}
          <FooterRight />

          <FooterCredit />
        </div>
      </div>

      {/* branding image */}
      <FooterBotttom />
    </footer>
  );
};

export default Footer;

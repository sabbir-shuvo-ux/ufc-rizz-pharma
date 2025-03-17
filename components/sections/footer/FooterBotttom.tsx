import Image from "next/image";

const FooterBotttom = () => {
  return (
    <div className="container pt-[50px]">
      <div className="w-full h-[581px] relative">
        <Image
          src={"/Branding.png"}
          alt="RIZZ PHARMA"
          fill
          className="mix-blend-color-dodge opacity-[0.8]"
        />
      </div>
    </div>
  );
};

export default FooterBotttom;

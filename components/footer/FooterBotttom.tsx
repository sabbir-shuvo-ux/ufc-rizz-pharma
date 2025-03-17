import Image from "next/image";

const FooterBotttom = () => {
  return (
    <div className="container pt-[50px]">
      <div className="relative w-full max-h-[581px] h-full min-h-[300px] min-lg:h-[581px]">
        <Image
          src={"/Branding.png"}
          alt="RIZZ PHARMA"
          fill
          className="mix-blend-color-dodge opacity-[0.8] object-contain"
        />
      </div>
    </div>
  );
};

export default FooterBotttom;

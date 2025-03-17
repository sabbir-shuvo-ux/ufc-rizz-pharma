import InputBox from "@/components/ui/InputBox";
import Image from "next/image";
import React from "react";

const FooterLeft = () => {
  return (
    <div className="">
      <div className="border-2 border-solid border-[rgba(255,255,255,0.10)] rounded-[20px] flex w-full max-w-[413px] min-w-[413px] py-[35px] justify-center items-center flex-col">
        <div className="max-w-[280px]">
          <h3 className="text-white text-center text-[43px] mb-[20px]">
            Let&apos;s Stay In Touch
          </h3>
          <p className="text-white text-center text-base">
            Keep up to date with our latest news & special offers.
          </p>
        </div>

        <InputBox
          iconPath="/send-icon.svg"
          label=""
          type="email"
          placeholder="enter your email"
          className="flex-row-reverse py-[18px] px-[24px] max-w-[333px] w-full h-[60px] bg-transparent backdrop-blur-none rounded-[8px] mt-[28px]"
          inputClassName="text-white font-neue-montreal text-base"
        />
      </div>
      <div className="w-full max-w-[413px] pt-[60px]">
        <Image
          src={"/hipaa.png"}
          className="object-contain w-[186px] h-auto mx-auto"
          alt="HIPAA Logo"
          height={107}
          width={186}
        />
      </div>
    </div>
  );
};

export default FooterLeft;

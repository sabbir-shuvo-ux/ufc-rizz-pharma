import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterCredit = () => {
  return (
    <div className="">
      <div className="flex gap-[12px] mb-[26px]">
        <Link
          href={"#"}
          className="bg-[#434B76] h-[36px] w-[36px] rounded-full flex items-center justify-center"
        >
          <Image
            src={"/facebook.svg"}
            height={16}
            width={16}
            className="object-contain w-[16px] h-[16px]"
            alt="Follow us on Facebook"
          />
        </Link>
        <Link
          href={"#"}
          className="bg-[#434B76] h-[36px] w-[36px] rounded-full flex items-center justify-center"
        >
          <Image
            src={"/insta.svg"}
            height={16}
            width={16}
            className="object-contain w-[16px] h-[16px]"
            alt="Follow us on Facebook"
          />
        </Link>
      </div>

      <div className="flex gap-[22px] items-center">
        <Image src={"/hims.png"} alt="HIMS.COM" height={72} width={84} />
        <p className="text-white text-base max-w-[394px] w-full">
          Copyright © {new Date().getFullYear()} Rizz Pharma All Rights Reserved
          - Built by Sabbir Ahmmed Shuvo
        </p>
      </div>
    </div>
  );
};

export default FooterCredit;

import ListItem from "@/components/ui/ListItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LinkBaseType = {
  label: string;
  url: string;
};

const FooterRight = () => {
  const quickLinkData: LinkBaseType[] = [
    { label: "Erectile Dysfunction", url: "#" },
    { label: "Weight Loss", url: "#" },
    { label: "Men's Hair Loss", url: "#" },
  ];

  const companyLinkData: LinkBaseType[] = [
    { label: "HIPAA Notice", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "Return & Refund Policy", url: "#" },
    { label: "Terms Of Use", url: "#" },
    { label: "CCPA Opt-Out", url: "#" },
    { label: "Opt-Out Preferences", url: "#" },
  ];

  return (
    <div className="flex justify-between mb-[60px]">
      <div className="">
        <h5 className="text-white text-[12px]">Quick Links</h5>

        <ul className="mt-[30px] mb-[60px] flex flex-col gap-[20px]">
          {quickLinkData?.map((item, index) => (
            <ListItem
              key={index}
              label={item.label}
              url={item.url}
              title={item.label}
            />
          ))}
        </ul>
        <div className="">
          <h5 className="text-white text-[12px] mb-[27px]">Contact Info</h5>
          <div className="flex gap-3 group">
            <Image
              src={"/email-icon.svg"}
              alt="Email Icon"
              height={16}
              width={16}
            />
            <Link
              href={"mailto:hello@rizzpharma.com"}
              className="text-white text-base group-hover:underline"
            >
              hello@rizzpharma.com
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <h5 className="text-white text-[12px]">Our Company</h5>

        <ul className="mt-[30px] flex flex-col gap-[20px]">
          {companyLinkData?.map((item, index) => (
            <ListItem
              key={index}
              label={item.label}
              url={item.url}
              title={item.label}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterRight;

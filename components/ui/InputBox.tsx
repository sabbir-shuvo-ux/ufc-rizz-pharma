// import { HTMLInputTypeAttribute } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  iconPath: string;
  className?: string;
  label: string;
  inputClassName?: string;
};

const InputBox = ({
  type = "text",
  placeholder,
  iconPath,
  className,
  label,
  inputClassName,
}: Props) => {
  return (
    <div
      className={cn(
        "w-[38.25rem] h-[4.6875rem] rounded-[6.25rem] border border-solid border-white bg-[rgba(67,67,67,0.16)] backdrop-blur-[102px] relative flex gap-[1.22rem] items-center mx-auto px-10",
        className
      )}
    >
      <label htmlFor="search_box" className="py-[1.56rem] cursor-pointer">
        <Image src={iconPath} alt={label} width={24} height={24} />
      </label>
      <input
        id="search_box"
        type={type}
        placeholder={placeholder}
        className={cn(
          "h-full w-full border-none outline-none focus:outline-none font-neue-montreal-medium tracking-[0.1rem] text-xl text-white placeholder:text-white",
          inputClassName
        )}
      />
    </div>
  );
};

export default InputBox;

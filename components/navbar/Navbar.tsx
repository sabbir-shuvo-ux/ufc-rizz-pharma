"use client";

import MenuItems from "@/components/navbar/MenuItems";
import SocialLinks from "@/components/navbar/SocialLinks";
import Image from "next/image";
import NavbarActions from "./NavbarActions";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "w-full max-h-[139px] fixed top-[30px] z-50 transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%_+_30px)]"
      )}
    >
      <div className="container flex justify-between h-full w-full">
        <figure className="max-w-[111px] max-h-[139px]">
          <Image
            src={"/UFC_RIZZ_Logo.png"}
            title="UFC RIZZ Logo"
            alt="UFC RIZZ Logo"
            height={139}
            width={111}
            quality={100}
          />
          <figcaption className="sr-only">UFC RIZZ Logo</figcaption>
        </figure>
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex gap-12">
            {/* menu items */}
            <MenuItems />
            {/* socials Links */}
            <SocialLinks />
          </div>

          <NavbarActions />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

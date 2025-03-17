"use client";

import MenuItems from "@/components/navbar/MenuItems";
import SocialLinks from "@/components/navbar/SocialLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNavbarToggle from "./MobileNavbarToggle";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledTarget, setIsScrolledTarget] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolledTarget(currentScrollY > 100);

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    setIsScrolledTarget(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "w-full max-h-[139px] fixed top-[30px] z-50 transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%_+_30px)]",
        isScrolledTarget
          ? "top-0 bg-[rgba(67,67,67,0.16)] backdrop-blur-[102px]"
          : ""
      )}
    >
      <div
        className={cn(
          "container flex justify-between h-full w-full max-lg:items-center",
          isScrolledTarget && "py-4"
        )}
      >
        <figure className="max-w-[111px] max-h-[139px] relative">
          <Image
            src={"/UFC_RIZZ_Logo.png"}
            title="UFC RIZZ Logo"
            alt="UFC RIZZ Logo"
            height={139}
            width={111}
            quality={100}
            className={cn(
              "max-lg:max-w-[80px]",
              isScrolledTarget ? "max-w-[70px]" : ""
            )}
          />
          <figcaption className="sr-only">UFC RIZZ Logo</figcaption>
        </figure>
        {/* Mobile sheet components */}
        <MobileNavbarToggle className="lg:hidden" />

        {/* desktop navigation menus */}
        <div className="flex flex-col gap-6 justify-center max-lg:hidden">
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

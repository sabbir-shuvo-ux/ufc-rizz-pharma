import MenuItems from "@/components/navbar/MenuItems";
import SocialLinks from "@/components/navbar/SocialLinks";
import Image from "next/image";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
  return (
    <header className="container flex justify-between max-h-[139px] h-full mt-[30px] w-full">
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
    </header>
  );
};

export default Navbar;

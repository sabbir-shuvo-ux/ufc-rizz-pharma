import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavbarActions = () => {
  return (
    <div className="flex items-center justify-end gap-[30px]">
      <Button asChild>
        <Link href={"#"}>Sign Up</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href={"#"}>Log In</Link>
      </Button>
      <Button aria-label="Add To Cart Button" variant={"initial"} size={"icon"}>
        <Image
          src={"/cart.svg"}
          alt="Add To Cart Button"
          width={36.66}
          height={36.66}
          title="Add To Cart Button"
        />
      </Button>
    </div>
  );
};

export default NavbarActions;

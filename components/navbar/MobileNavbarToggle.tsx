import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import SocialLinks from "./SocialLinks";
import MenuItems from "./MenuItems";

type Props = {
  className: string;
};

const MobileNavbarToggle = ({ className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={className}>
        <Button
          size={"icon"}
          variant={"outline"}
          className="rounded-[4px] text-white border px-4 py-2"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[rgba(67,67,67,0.16)] backdrop-blur-[102px] border-l-0 px-6">
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>

        <MenuItems className="flex-col mb-10" />

        <SocialLinks />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbarToggle;

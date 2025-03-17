import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type MenuDataType = {
  id: string;
  label: string;
  url: string;
  isDropdown?: boolean;
};

type Props = {
  className?: string;
};

const MenuItems = ({ className }: Props) => {
  const menuData: MenuDataType[] = [
    {
      id: "1",
      label: "Home",
      url: "#",
    },
    {
      id: "2",
      label: "Category",
      url: "#",
      isDropdown: true,
    },
    {
      id: "3",
      label: "Top Products",
      url: "#",
      isDropdown: true,
    },
    {
      id: "4",
      label: "Contact Us",
      url: "#",
    },
    {
      id: "5",
      label: "FAQs",
      url: "#",
    },
  ];
  return (
    <nav>
      <ul className={cn("flex gap-10", className)}>
        {menuData?.map((item, index: number) =>
          !item.isDropdown ? (
            <li key={item.id}>
              <Button
                asChild
                variant={"link"}
                size={"link"}
                className={cn(
                  "shadow-none",
                  index === 0 &&
                    "relative before:content-[''] before:absolute before:-bottom-2 before:h-[2px] before:w-full before:bg-white before:rounded-4xl"
                )}
              >
                <Link href={item.url}>{item.label}</Link>
              </Button>
            </li>
          ) : (
            <li className="relative group" key={item.id}>
              <Button
                asChild
                variant={"link"}
                size={"link"}
                className="shadow-none"
              >
                <Link href={item.url}>
                  {item.label}
                  <ChevronDown className="group-hover:rotate-180 transition-all duration-300" />
                </Link>
              </Button>
              <ul className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-[300px] bg-[#22242d] z-50 rounded-[8px] ">
                {Array.from({ length: 4 }).map((_, subMenuIndex) => (
                  <li key={subMenuIndex}>
                    <Button
                      asChild
                      variant={"link"}
                      size={"link"}
                      className="shadow-none w-full py-4"
                    >
                      <Link href={"#"}>Weight Loss</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default MenuItems;

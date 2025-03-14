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

const MenuItems = () => {
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
      <ul className="flex gap-10">
        {menuData?.map((item, index: number) =>
          !item.isDropdown ? (
            <li key={item.id}>
              <Button
                asChild
                variant={"link"}
                size={"link"}
                className={cn(
                  index === 0 &&
                    "relative before:content-[''] before:absolute before:-bottom-2 before:h-[2px] before:w-full before:bg-white before:rounded-4xl"
                )}
              >
                <Link href={item.url}>{item.label}</Link>
              </Button>
            </li>
          ) : (
            <li key={item.id}>
              <Button asChild variant={"link"} size={"link"}>
                <Link href={item.url}>
                  {item.label}
                  <ChevronDown />
                </Link>
              </Button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default MenuItems;

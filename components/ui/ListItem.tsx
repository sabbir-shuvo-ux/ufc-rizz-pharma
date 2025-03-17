import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type Props = {
  className?: string;
  label: string;
  url: string;
  parentClassName?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const ListItem = ({
  className,
  parentClassName,
  url,
  label,
  ...rest
}: Props) => {
  return (
    <li className={cn(parentClassName)}>
      <Link
        className={cn("text-white text-base hover:underline", className)}
        href={url}
        {...rest}
      >
        {label}
      </Link>
    </li>
  );
};

export default ListItem;

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type SocialLinkType = {
  img: string;
  label: string;
};

const SocialLinks = () => {
  const socialLinksData: SocialLinkType[] = [
    { img: "/insta.svg", label: "Follow Us On Instagram" },
    {
      img: "/fb.svg",
      label: "Follow Us On Facebook",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinksData?.map((item, index: number) => (
        <Button asChild key={index} variant={"initial"} size={"icon"}>
          <Link href={"#"} target="_blank">
            <Image
              className="object-contain"
              src={item.img}
              height={24}
              width={24}
              alt={item.label}
              title={item.label}
            />
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;

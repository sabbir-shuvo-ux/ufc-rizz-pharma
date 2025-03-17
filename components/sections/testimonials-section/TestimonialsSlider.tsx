import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/CarouselDots";
import { ratingResult } from "@/lib/ratingResult";
import Image from "next/image";

const TestimonialsSlider = () => {
  const { fullStars, outlineStars } = ratingResult(4);

  return (
    <Carousel
      opts={{
        align: "center",
        startIndex: 1,
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="min-[426px]:basis-1/2 md:basis-1/3 lg:basis-1/4 max-[426px]:pl-8 max-[426px]:pr-4"
          >
            <div className="rounded-[15.569px] p-8 bg-[url('/Dissolve_Noise_Texture1.png')] min-h-[440px] h-full w-full max-[1170px]:px-4 max-[1170px]:py-6 max-[1170px]:h-auto max-[1170px]:min-h-auto">
              <Image
                src={"/inverted-comma.svg"}
                width={24}
                height={24}
                alt="Inverted Comma"
              />
              <p className="text-white text-lg mb-[35px] mt-[30px] max-[1170px]:mb-[30px] max-[1170px]:text-base">
                I&apos;ve tried every home remedy and hair care treatment but
                ended up with long waits and no results. Since I&apos;ve started
                using Hims my hair has grown, thickened, and darkened
                tremendously.
              </p>

              <div className="flex gap-3 justify-center mb-[53px] max-[1170px]:mb-[30px]">
                {[...Array(fullStars)].map((_, index) => (
                  <Image
                    key={index}
                    src={"/star-stroke-rizz.svg"}
                    alt="Review Star"
                    height={24}
                    width={24}
                  />
                ))}
                {[...Array(outlineStars)].map((_, index) => (
                  <Image
                    key={index}
                    src={"/star-stroke-rizz-blank.svg"}
                    alt="Review Star"
                    height={24}
                    width={24}
                  />
                ))}
              </div>

              <div className="flex gap-[20px] justify-center max-[1170px]:items-center">
                <Image
                  src={"/John-Williams.svg"}
                  alt="Reviewer Name John Williams"
                  width={60}
                  height={60}
                />
                <div>
                  <h5 className="text-white text-xl font-neue-montreal-bold mb-1 max-[1170px]:text-base">
                    John Williams
                  </h5>
                  <h6 className="text-[rgba(255,255,255,0.50)] font-neue-montreal-bold text-base max-[1170px]:text-sm">
                    Lead designer
                  </h6>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <CarouselDots className="mt-[50px] max-[375px]:hidden" />
    </Carousel>
  );
};

export default TestimonialsSlider;

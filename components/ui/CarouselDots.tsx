"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";
import { useCarousel } from "./carousel";

export const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { api } = useCarousel();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updateState, setUpdateState] = React.useState(false);
  const toggleUpdateState = React.useCallback(
    () => setUpdateState((prevState) => !prevState),
    []
  );

  React.useEffect(() => {
    if (api) {
      api.on("select", toggleUpdateState);
      api.on("reInit", toggleUpdateState);

      return () => {
        api.off("select", toggleUpdateState);
        api.off("reInit", toggleUpdateState);
      };
    }
  }, [api, toggleUpdateState]);

  const numberOfSlides = api?.scrollSnapList().length || 0;
  const currentSlide = api?.selectedScrollSnap() || 0;

  if (numberOfSlides > 1) {
    return (
      <div
        ref={ref}
        className={`flex justify-center gap-4 items-center ${props.className}`}
      >
        {Array.from({ length: numberOfSlides }, (_, i) => (
          <Button
            key={i}
            variant={"initial"}
            className={cn(
              "mx-1 rounded-full p-0",
              i === currentSlide
                ? "bg-[#B9B8B8] h-4 w-4"
                : "bg-[rgba(185,184,184,.3)] w-[14px] h-[14px]"
            )}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
});
CarouselDots.displayName = "CarouselDots";

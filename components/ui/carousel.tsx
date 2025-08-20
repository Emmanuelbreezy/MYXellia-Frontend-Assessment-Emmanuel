"use client";
import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { Box, IconButton } from "@chakra-ui/react";
import ArrowRightIcon from "@/assets/icons/arrow-round-right.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-round-left.svg";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within <Carousel />");
  return context;
}

export function Carousel({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: CarouselOptions;
}) {
  const [carouselRef, api] = useEmblaCarousel(options);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <Box position="relative" w="100%">
        {children}
      </Box>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  const { carouselRef } = useCarousel();
  return (
    <Box ref={carouselRef} overflow="hidden">
      <Box display="flex">{children}</Box>
    </Box>
  );
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <Box flex="0 0 100%" px={2}>
      {children}
    </Box>
  );
}

export function CarouselPrevious() {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <IconButton
      aria-label="Previous"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      position="absolute"
      top="50%"
      left="2"
      transform="translateY(-50%)"
      borderRadius="full"
    >
      <ArrowLeftIcon />
    </IconButton>
  );
}

export function CarouselNext() {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <IconButton
      aria-label="Next"
      onClick={scrollNext}
      disabled={!canScrollNext}
      position="absolute"
      top="50%"
      right="2"
      transform="translateY(-50%)"
      borderRadius="full"
    >
      <ArrowRightIcon />
    </IconButton>
  );
}

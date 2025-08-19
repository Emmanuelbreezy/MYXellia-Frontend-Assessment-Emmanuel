"use client";
import React, { useEffect } from "react";
import { Box, HStack, Card, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselCardProps = {
  images: string[];
  title: string;
  content: string;
};

const CarouselCard = ({ images, title, content }: CarouselCardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return (): void => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Card.Root pos="relative" w="full" rounded="12px" overflow="hidden">
      <Card.Body ref={emblaRef}>
        <Box display="flex">
          {images.map((src, i) => (
            <Box
              key={i}
              flex="0 0 100%"
              h="250px"
              backgroundImage={`url(${src})`}
              backgroundSize="cover"
              backgroundPosition="center"
              position="relative"
            >
              <Box
                position="absolute"
                bottom={0}
                top={0}
                inset={0}
                w="full"
                h="full"
                display="flex"
                flexDir="column"
                justifyContent="flex-end"
                bg="linear-gradient(183.45deg, rgba(0, 0, 0, 0.05) 41.18%, rgba(0, 0, 0, 0.6) 100.3%)"
                color="white"
                p={3}
              >
                <Box>
                  <Text fontWeight="500" fontSize="14px" color="brand.white">
                    {title}
                  </Text>
                  <Text fontSize="18px" fontWeight="600" color="brand.white">
                    {content}
                  </Text>
                </Box>
                {/* Dot indicators */}
                <HStack gap={2} justify="center" py={2} zIndex={20}>
                  {images.map((_, i) => (
                    <Box
                      as="button"
                      key={i}
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      cursor="pointer"
                      bg={
                        i === selectedIndex ? "brand.white" : "brand.gray.300"
                      }
                    />
                  ))}
                </HStack>
              </Box>
            </Box>
          ))}
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default CarouselCard;

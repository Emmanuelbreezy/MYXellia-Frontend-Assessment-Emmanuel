import React from "react";
import { Stack, Card, Image } from "@chakra-ui/react";
import CarouselCard from "@/components/carousel-card";

const GalleryCards = () => {
  const ITEMS = [
    {
      title: "Most CLICKED",
      content: "Urban Prime Plaza Premiere",
      images: ["./images/gallery-img1.png", "./images/gallery-img3.png"],
    },
    {
      title: "Most WATCHLISTED",
      content: "Urban Prime Plaza Premiere",
      images: ["./images/gallery-img2.png", "./images/gallery-img1.png"],
    },
    {
      title: "HOTTEST LISTING",
      content: "Urban Prime Plaza Premiere",
      images: ["./images/gallery-img3.png", "./images/gallery-img1.png"],
    },
  ];
  return (
    <Stack w="full" direction={{ base: "column", lg: "row" }}>
      {ITEMS.map((item, i) => (
        <CarouselCard key={i} {...item} />
      ))}
    </Stack>
  );
};

export default GalleryCards;

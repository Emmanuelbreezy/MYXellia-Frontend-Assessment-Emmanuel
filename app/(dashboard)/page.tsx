"use client";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import SalesOverview from "./_common/sales-overview";
import ListingOverview from "./_common/listing-overview";
import UsersOverview from "./_common/users-overview";
import GalleryCards from "./_common/gallery-cards";

export default function Home() {
  return (
    <Box w="full">
      <VStack
        w="full"
        maxW="var(--max-width)"
        m="0 auto"
        spaceY="5px"
        px={{ base: "10px", xl: 0 }}
      >
        <Box w="full" pt="8px">
          <Heading
            as="h2"
            fontSize="20px"
            fontWeight="600"
            color="brand.secondary"
          >
            Welcome Ahmed
          </Heading>
        </Box>

        <Flex w="full" flexDirection={{ base: "column", lg: "row" }} gap="10px">
          <SalesOverview />
          <VStack w="full" flex="0.5" gap="17.9px">
            <ListingOverview />
            <UsersOverview />
          </VStack>
        </Flex>

        <Box w="full">
          <GalleryCards />
        </Box>
      </VStack>
    </Box>
  );
}

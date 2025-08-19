"use client";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import SalesOverview from "./_common/sales-overview";
import ListingOverview from "./_common/listing-overview";
import UsersOverview from "./_common/users-overview";

export default function Home() {
  return (
    <Box w="full">
      <Box w="full" maxW="var(--max-width)" m="0 auto">
        <Box w="full" pt="8px" pb="12px">
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
          <VStack w="full" flex="0.5" gap="15px">
            <ListingOverview />
            <UsersOverview />
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}

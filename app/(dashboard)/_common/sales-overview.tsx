import React from "react";
import {
  Box,
  Card,
  Heading,
  Text,
  HStack,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const SalesOverview = () => {
  return (
    <Box flex="1">
      <Card.Root w="full" h="325px" rounded="16px">
        <Card.Header p="15px">
          <HStack justifyContent="space-between">
            <Box>
              <Heading fontSize="20px" fontWeight="600" color="brand.secondary">
                Sales Overview
              </Heading>
              <Text fontSize="12px" color="brand.gray.400">
                Showing overview Jan 2022 - Sep 2022
              </Text>
            </Box>

            <ButtonGroup>
              <Button variant="outline">View Transactions</Button>
            </ButtonGroup>
          </HStack>
        </Card.Header>
        <Card.Body></Card.Body>
      </Card.Root>
    </Box>
  );
};

export default SalesOverview;

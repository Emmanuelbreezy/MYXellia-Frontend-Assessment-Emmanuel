import React from "react";
import { Button, Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { StatItem } from "./stat-item";

type Stat = {
  title: string;
  amount: string;
};

interface StatCardProps {
  icon: React.ReactNode;
  heading: string;
  stats: Stat[];
  buttonText?: string;
  onButtonClick?: () => void;
}

const StatCard = ({
  icon,
  heading,
  stats,
  buttonText = "View all",
  onButtonClick,
}: StatCardProps) => {
  return (
    <Card.Root
      w="full"
      minH="152px"
      rounded="16px"
      borderColor="brand.gray.200"
      bg="brand.white"
    >
      <Card.Header
        borderBottom="0.5px solid"
        borderBottomColor="brand.gray.200"
        roundedTop="16px"
        bg="brand.gray.50"
        h="50px"
      >
        <HStack px="12px" py="3px" w="full" justifyContent="space-between">
          <HStack gap="10px">
            {icon}
            <Heading
              as="h5"
              fontSize="14px"
              fontWeight="500"
              color="brand.gray.800"
              fontFamily="euclid"
            >
              {heading}
            </Heading>
          </HStack>
          {buttonText && (
            <Button
              variant="plain"
              fontSize="12px"
              fontWeight="500"
              color="brand.blue.500"
              gap="2px"
              alignItems="center"
              onClick={onButtonClick}
            >
              <Text as="span">{buttonText}</Text>
              <ArrowRightIcon style={{ marginTop: "2px" }} />
            </Button>
          )}
        </HStack>
      </Card.Header>
      <Card.Body w="full" pt="10px">
        <Stack py="10px" px="15px" direction="row" w="full">
          {stats.map((stat, idx) => (
            <StatItem key={idx} title={stat.title} amount={stat.amount} />
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default StatCard;

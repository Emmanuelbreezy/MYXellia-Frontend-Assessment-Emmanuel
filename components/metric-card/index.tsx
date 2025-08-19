import React from "react";
import { Card, VStack, HStack, Text } from "@chakra-ui/react";
import ArrowCircleUpIcon from "@/assets/icons/arrow-circle-up.svg";
import ArrowCircleDownIcon from "@/assets/icons/arrow-circle-down.svg";

type MetricCardProps = {
  title: string;
  amount: number;
  percentageChange: number;
  amountColor?: string;
  trend?: "up" | "down" | "auto";
};

export const MetricCard = ({
  title,
  amount,
  percentageChange,
  amountColor,
  trend = "up",
}: MetricCardProps) => {
  const isUp =
    trend === "up" ? true : trend === "down" ? false : percentageChange >= 0;

  const color = isUp ? "brand.green.500" : "brand.red.500";

  return (
    <Card.Root
      w="189px"
      h="73px"
      p="10px"
      rounded="12px"
      borderColor="brand.gray.200"
      bg="brand.white"
    >
      <VStack align="flex-start" gap="8px">
        <Text fontSize="19px" fontWeight="600" color={amountColor || color}>
          ₦{amount.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
        </Text>
        <HStack gap="6px" mt="-2px">
          <Text fontSize="10px" fontWeight="500" color="brand.gray.950">
            {title}
          </Text>
          <HStack gap="2px">
            {isUp ? (
              <ArrowCircleUpIcon style={{ marginBottom: "1.5px" }} />
            ) : (
              <ArrowCircleDownIcon style={{ marginBottom: "1.5px" }} />
            )}
            <Text fontSize="10px" fontWeight="400" color={color}>
              {percentageChange}%
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Card.Root>
  );
};

export default MetricCard;

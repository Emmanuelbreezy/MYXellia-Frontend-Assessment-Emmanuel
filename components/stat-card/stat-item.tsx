import { VStack, Text } from "@chakra-ui/react";

export const StatItem = (props: { title: string; amount: string }) => {
  return (
    <VStack flex="1" alignItems="flex-start" gap="8px">
      <Text as="span" css={spanStyle}>
        {props.title}
      </Text>
      <Text css={amountStyle}>{props.amount}</Text>
    </VStack>
  );
};

const amountStyle = {
  color: "brand.gray.900",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "38px",
};

const spanStyle = {
  color: "brand.gray.600",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "20px",
};

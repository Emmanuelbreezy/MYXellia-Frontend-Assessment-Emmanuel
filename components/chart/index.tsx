import React from "react";
import Barchart from "./bar-chart";
import { Box, HStack, IconButton } from "@chakra-ui/react";
import ArrowRightIcon from "@/assets/icons/arrow-round-right.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-round-left.svg";

type ChartData = {
  month: string;
  [key: string]: number | string;
};

type PropsType = {
  data: ChartData[];
  series: {
    name: string;
    color: string;
  }[];
  showLegend?: boolean;
  chartHeight?: string;
};

const Chart: React.FC<PropsType> = (props) => {
  return (
    <HStack pos="relative" w="full">
      <IconButton variant="plain" pos="absolute" left="-12px">
        <ArrowLeftIcon />
      </IconButton>
      <Box w="full" ml="-10px">
        <Barchart {...props} chartHeight="180px" />
      </Box>
      <IconButton variant="plain" pos="absolute" right="-12px">
        <ArrowRightIcon />
      </IconButton>
    </HStack>
  );
};

export default Chart;

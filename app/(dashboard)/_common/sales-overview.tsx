"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  Heading,
  Text,
  HStack,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import MetricCard from "@/components/metric-card";
import Barchart from "@/components/chart/bar-chart";

const DateRangeEnum = {
  "1_WEEK": "1_WEEK",
  "1_MONTH": "1_MONTH",
  "1_YEAR": "1_YEAR",
} as const;

type DateRangeType = keyof typeof DateRangeEnum;

const SalesOverview = () => {
  const [dateRange, setDateRange] = useState<DateRangeType>("1_YEAR");

  const buttonStyle = {
    w: "80px",
    color: "brand.gray.950",
    fontSize: "14px",
    fontWeight: "400",
    rounded: "8px",
    _hover: {
      bg: "brand.gray.500",
    },
  };

  const chartData = [
    {
      month: "Jan",
      inflow: 35,
      mrr: 28,
      gmv: 10,
    },
    {
      month: "Feb",
      inflow: 5,
      mrr: 28,
      gmv: 10,
    },
    {
      month: "Mar",
      inflow: 15,
      mrr: 6,
      gmv: 2,
    },
    {
      month: "Apr",
      inflow: 15,
      mrr: 25,
      gmv: 10,
    },
    {
      month: "May",
      inflow: 10,
      mrr: 1,
      gmv: 8,
    },
    {
      month: "Jun",
      inflow: 32,
      mrr: 48,
      gmv: 8,
    },
    {
      month: "Jul",
      inflow: 22,
      mrr: 35,
      gmv: 17,
    },
    {
      month: "Aug",
      inflow: 22,
      mrr: 7,
      gmv: 17,
    },
    {
      month: "Sep",
      inflow: 35,
      mrr: 31,
      gmv: 7,
    },
  ];

  const series = [
    { name: "inflow", color: "brand.blue.500" },
    { name: "mrr", color: "brand.green.500" },
    { name: "gmv", color: "brand.red.500" },
  ];

  return (
    <Box flex="1">
      <Card.Root
        w="full"
        minH="325px"
        maxH={{ base: "auto", lg: "325px" }}
        rounded="16px"
      >
        <Card.Header
          p="15px"
          borderBottom="1px solid"
          borderBottomColor="brand.gray.200"
        >
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
              <Button
                variant="outline"
                rounded="72px"
                p="16px 18px"
                color="brand.secondary"
                fontSize="12px"
                fontWeight="500"
              >
                View Transactions
              </Button>
            </ButtonGroup>
          </HStack>
          <HStack justifyContent="right" pt="3px">
            {Object.entries(DateRangeEnum).map(([key]) => {
              const label = key
                ?.split("_")
                ?.map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <Button
                  key={key}
                  variant="plain"
                  onClick={() => setDateRange(key as DateRangeType)}
                  css={{
                    ...buttonStyle,
                    bg: dateRange === key ? "brand.gray.500" : "",
                    fontWeight: dateRange === key ? "600" : "400",
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </HStack>
        </Card.Header>
        <Card.Body pt="6px" pb="0px">
          <Grid
            templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
            gap={4}
            px="10px"
            py="10px"
          >
            <GridItem overflow="hidden">
              <Box flex="1" ml="-25px">
                <Barchart
                  data={chartData}
                  series={series}
                  showLegend={false}
                  chartHeight="180px"
                />
              </Box>
            </GridItem>

            <GridItem>
              <Grid templateColumns="repeat(2, 1fr)" gap={2} rowGap={4}>
                <MetricCard
                  amount={120000000}
                  title="Total Inflow"
                  percentageChange={2.5}
                  amountColor="brand.blue.500"
                  trend="up"
                />
                <MetricCard
                  amount={50000000}
                  title="MRR"
                  percentageChange={2.5}
                  trend="up"
                />
                <MetricCard
                  amount={200000000}
                  title="Commission Revenue"
                  percentageChange={0.5}
                />
                <MetricCard
                  amount={100000000}
                  title="GMV"
                  percentageChange={0.5}
                  trend="down"
                />
              </Grid>
            </GridItem>
          </Grid>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default SalesOverview;

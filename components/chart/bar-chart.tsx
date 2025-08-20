"use client";
import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

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
const Barchart: React.FC<PropsType> = ({
  data,
  series,
  showLegend = false,
  chartHeight = "md",
}) => {
  const chart = useChart({
    data,
    series,
  });

  return (
    <Chart.Root w="full" maxH={chartHeight} chart={chart}>
      <BarChart data={chart.data}>
        <XAxis
          tickLine={false}
          dataKey={chart.key("month")}
          stroke={chart.color("border")}
          tick={{
            fill: "brand.gray.300",
            fontSize: 10,
            fontWeight: 500,
          }}
        />
        <YAxis
          tickLine={false}
          stroke={chart.color("border")}
          tickFormatter={(value) => `${value}m`}
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
          tick={{
            fill: "brand.gray.300",
            fontSize: 10,
            fontWeight: 400,
          }}
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        {showLegend && (
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            content={<Chart.Legend orientation="horizontal" />}
          />
        )}
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  );
};

export default Barchart;

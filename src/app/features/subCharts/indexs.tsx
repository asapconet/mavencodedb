import React from "react";
import { pieChartData } from "../../../data/chartData";
import { ChartCard } from "components/organisms/card/chartCard";

export const SubCharts: React.FC = () => {
  const chartTitles = [
    "Doughnut Information",
    "Pie Accounts",
    "New feedback",
    "Today profit",
  ];

  return (
    <div className="w-full flex flex-col gap-6 h-fit">
      <span
        className="capitalize font-medium text-md text-neu-2 px-8 border rounded-md h-14 flex items-center
      bg-blue-100"
      >
        <b>Read our documentation</b> with code samples
      </span>
      <div className="grid grid-cols-2 gap-8 overflow-auto scrollbar-hide">
        {chartTitles.map((title, index) => (
          <ChartCard
            key={title}
            title={title}
            chartData={pieChartData[index]}
          />
        ))}
      </div>
    </div>
  );
};

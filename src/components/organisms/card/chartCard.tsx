import { NutPieChart } from "components/atoms/charts/nutPieChart";
import { chartProps } from "../../../types/chats";

interface ChartCardProps {
  title: string;
  chartData: chartProps;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, chartData }) => (
  <div className="w-full bg-white rounded-sm border shadow h-full">
    <h2 className="capitalize font-medium text-lg text-neu-2 px-8 border-b h-20 flex items-center">
      {title}
    </h2>
    <div className="h-[13rem] flex justify-center items-center">
      <NutPieChart
        data={chartData?.data}
        type={chartData?.type}
        labels={chartData?.labels}
        backgroundColor={chartData?.backgroundColor}
      />
    </div>
  </div>
);

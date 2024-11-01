import { LineChart } from "components/atoms/charts/lineChart";

export const DevActivities = () => {
  return (
    <div className="w-full  bg-white rounded-sm border border-1 shadow h-full">
      <h2 className="capitalize font-medium text-lg text-neu-2 px-8 border-b h-20 flex items-center">
        development activity
      </h2>
      <div className="h-[16rem] -m-1 mt-2">
        <LineChart />
      </div>
      <div className="h-[10rem] ">chart space</div>
    </div>
  );
};

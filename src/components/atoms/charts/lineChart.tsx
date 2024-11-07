import { useEffect } from "react";
import { CChart } from "@coreui/react-chartjs";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../../../modules/dashboard/dataSlice";
import { selectLineChartData } from "../../../modules/dashboard/selectors";

export const LineChart: React.FC = () => {
  const dispatch = useDispatch();
  const lineChartData = useSelector(selectLineChartData);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return (
    <div className="w-full h-[250px]">
      <CChart
        type="line"
        data={lineChartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

import { CChart } from "@coreui/react-chartjs";
import { chartProps } from "../../../types/chats";

export const NutPieChart: React.FC<chartProps> = ({
  labels,
  data,
  type,
  backgroundColor,
}) => {
  return (
    <div className="h-full p-4 flex justify-center text-blue-400">
      <CChart
        type={type}
        data={{
          labels: labels,
          datasets: [
            {
              backgroundColor: backgroundColor,
              data: data,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false,
            },
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

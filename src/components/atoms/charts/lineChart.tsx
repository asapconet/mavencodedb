import { CChart } from "@coreui/react-chartjs";

export const LineChart: React.FC = () => {
  return (
    <div className="w-full h-[250px]">
      <CChart
        type="line"
        data={{
          labels: ["", "", "", "", "", "", "", "", "", ""],
          datasets: [
            {
              backgroundColor: "#dbeafe",
              borderColor: "#60a5fa",
              pointBackgroundColor: "transparent",
              pointBorderColor: "transparent",
              fill: true,
              data: [0, 0, 2, 4, 3, 1, 6, 8, 10, 9],
            },
          ],
        }}
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

import { chartProps } from "../types/chats";

export const pieChartData: chartProps[] = [
  {
    data: [12, 45],
    labels: ["", ""],
    type: "doughnut",
    backgroundColor: ["#22c55e", "#a3e635"],
  },
  {
    data: [5, 50, 17, 20],
    labels: ["50%", "", "", ""],
    type: "pie",
    backgroundColor: ["#1d4ed8 ", "#1e3a8a", "#bfdbfe", "#60a5fa"],
  },
  {
    data: [50, 5, 17, 20],
    labels: ["", "", "", ""],
    type: "bar",
    backgroundColor: ["#1d4ed8 ", "#1e3a8a", "#bfdbfe", "#60a5fa"],
  },
  {
    data: [12, 45],
    labels: ["", ""],
    type: "doughnut",
    backgroundColor: ["#22c55e", "#a3e635"],
  },
];
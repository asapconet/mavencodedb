export interface chartProps {
  data: number[];
  labels: string[];
  type: "pie" | "doughnut" | "bar";
  backgroundColor: string[];
}

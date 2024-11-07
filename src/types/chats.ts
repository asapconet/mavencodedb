import { ChartData, ChartTypeRegistry } from "chart.js";
import { WritableDraft } from "immer";

// Utility type to make ChartData writable (for Redux Toolkit compatibility)
export type MutableChartData<TType extends keyof ChartTypeRegistry> = {
  [K in keyof ChartData<TType>]: ChartData<TType>[K] extends readonly (infer U)[]
    ? WritableDraft<U>[]
    : WritableDraft<ChartData<TType>[K]>;
};

export interface chartProps {
  data: number[];
  labels: string[];
  type: "pie" | "doughnut" | "bar";
  backgroundColor: string[];
}

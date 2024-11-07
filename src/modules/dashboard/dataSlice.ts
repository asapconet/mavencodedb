import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "types/card";
import { chartProps, MutableChartData } from "types/chats";
import { TableDataProps } from "types/table";

export interface DashboardDataState {
  cardData: CardProps[];
  pieChartData: chartProps[];
  tableData: TableDataProps[];
  lineChartData: MutableChartData<"line">;
  isLoading: boolean;
  error: string | null;
}

const initialState: DashboardDataState = {
  cardData: [],
  tableData: [],
  pieChartData: [],
  lineChartData: {
    labels: [],
    datasets: [],
  },
  isLoading: false,
  error: null,
};

const dashboardDataSlice = createSlice({
  name: "dashboardDataSlice",
  initialState,
  reducers: {
    getDashboardData: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getDashboardDataSuccess: (
      state,
      action: PayloadAction<{
        cardData: CardProps[];
        pieChartData: chartProps[];
        tableData: TableDataProps[];
        lineChartData: MutableChartData<"line">;
      }>
    ) => {
      state.isLoading = false;
      state.cardData = action.payload.cardData;
      state.tableData = action.payload.tableData;
      state.pieChartData = action.payload.pieChartData;
      state.lineChartData = action.payload.lineChartData;
    },
    getDashboardDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getDashboardData,
  getDashboardDataSuccess,
  getDashboardDataFailure,
} = dashboardDataSlice.actions;

export default dashboardDataSlice.reducer;

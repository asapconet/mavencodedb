import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "types/card";
import { chartProps } from "types/chats";

export interface DashboardDataState {
  cardData: CardProps[];
  pieChartData: chartProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DashboardDataState = {
  cardData: [],
  pieChartData: [],
  isLoading: false,
  error: null,
};

const dashboardDataSlice = createSlice({
  name: "dashboardDataSlice",
  initialState,
  reducers: {
    getDashboardData: (state: any) => {
      state.isLoading = true;
      state.error = null;
    },
    getDashboardDataSuccess: (
      state,
      action: PayloadAction<{
        cardData: CardProps[];
        pieChartData: chartProps[];
      }>
    ) => {
      state.isLoading = false;
      state.cardData = action.payload.cardData;
      state.pieChartData = action.payload.pieChartData;
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

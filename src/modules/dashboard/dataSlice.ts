import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "types/card";

export interface DashboardDataState {
  cardData: CardProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DashboardDataState = {
  cardData: [],
  isLoading: false,
  error: null,
};

const dashboardDataSlice = createSlice({
  name: "dashboardDataSlice",
  initialState,
  reducers: {
    getCardData: (state: any) => {
      state.isLoading = true;
      state.error = null;
    },
    getCardDataSuccess: (
      state,
      action: PayloadAction<{ cardData: CardProps[] }>
    ) => {
      state.isLoading = false;
      state.cardData = action.payload.cardData;
    },
    getCardDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCardData, getCardDataSuccess, getCardDataFailure } =
  dashboardDataSlice.actions;

export default dashboardDataSlice.reducer;

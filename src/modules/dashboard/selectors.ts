import { RootState } from "../../store/index";

export const selectCard = (state: RootState) => state.dashboardDataSlice.cardData;
export const selectIsLoading = (state: RootState) => state.dashboardDataSlice.isLoading;
export const selectError = (state: RootState) => state.dashboardDataSlice.error;
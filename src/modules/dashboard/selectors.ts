import { RootState } from "../../store/index";

export const selectCard = (state: RootState) => state.dashboardDataSlice.cardData;
export const selectPieChartData = (state: RootState) => state.dashboardDataSlice.pieChartData;
export const selectTableData = (state: RootState) => state.dashboardDataSlice.tableData;
export const selectLineChartData = (state: RootState) => state.dashboardDataSlice.lineChartData;
export const selectIsLoading = (state: RootState) => state.dashboardDataSlice.isLoading;
export const selectError = (state: RootState) => state.dashboardDataSlice.error;

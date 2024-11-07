import { render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import "@testing-library/jest-dom";
import { getDashboardData } from "../../modules/dashboard/dataSlice";
import { LineChart } from "../../components/atoms/charts/lineChart";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockCChart = jest.fn();
jest.mock("@coreui/react-chartjs", () => ({
  CChart: (props: any) => {
    mockCChart(props);
    return <div data-testid="CChart" />;
  },
}));

describe("LineChart Component", () => {
  const mockDispatch = jest.fn();

  const mockLineChartData = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [{ data: [10, 20, 30] }],
  };

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockReturnValue(mockLineChartData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("dispatches getDashboardData on mount", () => {
    render(<LineChart />);
    expect(mockDispatch).toHaveBeenCalledWith(getDashboardData());
  });

  test("renders CChart with correct data and type", () => {
    render(<LineChart />);
    expect(screen.getByTestId("CChart")).toBeInTheDocument();

    expect(mockCChart).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "line",
        data: mockLineChartData,
        options: expect.objectContaining({
          responsive: true,
          maintainAspectRatio: false,
        }),
      })
    );
  });
});

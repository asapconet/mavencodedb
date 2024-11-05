import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NutPieChart } from "components/atoms/charts/nutPieChart";
import { ChartCard } from "components/organisms/card/chartCard";
import { chartProps } from "src/types/chats";

jest.mock("components/atoms/charts/nutPieChart", () => ({
  NutPieChart: jest.fn(() => <div data-testid="chart" />),
}));

describe("ChartCard component", () => {
  const mockChartData: chartProps = {
    data: [10, 20, 30],
    type: "pie",
    labels: ["Label 1", "Label 2", "Label 3"],
    backgroundColor: ["#fff", "#00ff00", "#0000ff"],
  };

  it("renders the title", () => {
    render(<ChartCard title="test Chart" chartData={mockChartData} />);
    expect(screen.getByText("test Chart")).toBeInTheDocument();
  });

  it("renders the chart component with correct props", () => {
    render(<ChartCard title="test Chart" chartData={mockChartData} />);

    expect(NutPieChart).toHaveBeenCalledWith(
      {
        data: mockChartData.data,
        type: mockChartData.type,
        labels: mockChartData.labels,
        backgroundColor: mockChartData.backgroundColor,
      },
      {}
    );
    expect(screen.getByTestId("chart")).toBeInTheDocument();
  });
});

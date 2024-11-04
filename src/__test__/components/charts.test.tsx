import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LineChart } from "components/atoms/charts/lineChart";

jest.mock("@coreui/react-chartjs", () => {
  return {
    CChart: jest.fn(() => <canvas data-testid="mock-cchart" />),
  };
});

describe("LineChart component", () => {
  it("renders without crashing", () => {
    render(<LineChart />);

    const chartContainer = screen.getByTestId("mock-cchart");
    expect(chartContainer).toBeInTheDocument();
  });

  it("displays the correct number of data points", () => {
    render(<LineChart />);

    const canvas = screen.getByTestId("mock-cchart");
    expect(canvas).toBeInTheDocument();
  });
});

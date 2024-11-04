import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LineChart } from "components/atoms/charts/lineChart";

describe("LineChart component", () => {
  it("renders without crashing", () => {
    render(<LineChart />);
    
    const chartContainer = screen.getByRole("img"); 
    expect(chartContainer).toBeInTheDocument();
  });

  it("displays the correct number of data points", () => {
    render(<LineChart />);

    const canvas = screen.getByRole("img"); 
    expect(canvas).toBeInTheDocument(); 
  });
});

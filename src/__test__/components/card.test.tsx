import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../../components/organisms/card";
import { CardProps } from "src/types/card";

describe("Card component", () => {
  const defaultProps: CardProps = {
    title: "Sample Title",
    description: "Sample description",
    growthRate: 5,
  };

  it("renders the title and description", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("Sample Title")).toBeInTheDocument();
    expect(screen.getByText("Sample description")).toBeInTheDocument();
  });

  it("displays the correct growth rate with a positive growth icon", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("+ 5%")).toBeInTheDocument();
    expect(screen.getByTestId("positive-icon")).toBeInTheDocument();
  });

  it("displays the correct growth rate with a negative growth icon", () => {
    render(<Card {...defaultProps} growthRate={-3} />);
    expect(screen.getByText("- 3%")).toBeInTheDocument();
    expect(screen.getByTestId("negative-icon")).toBeInTheDocument();
  });
});
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { McButton } from "components/atoms/buttons";

describe("McButton", () => {
  test("renders a button with default props", () => {
    render(<McButton>Click Me</McButton>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("bg-transparent text-nue-2");
  });

  test('renders a submit button when type is "submit"', () => {
    render(<McButton type="submit">Submit</McButton>);

    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass("bg-pri text-white");
  });

  test('renders an anchor element when "to" prop is provided', () => {
    render(<McButton to="https://example.com">Go to Example</McButton>);

    const link = screen.getByRole("link", { name: /go to example/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("applies custom className", () => {
    render(<McButton className="custom-class">Custom Class</McButton>);

    const button = screen.getByRole("button", { name: /custom class/i });
    expect(button).toHaveClass("custom-class");
  });
});

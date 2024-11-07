import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LogoutModal } from "components/atoms/modal";
import { useAuth } from "../../modules/auth/authProvider";

jest.mock("../../modules/auth/authProvider");

describe("LogoutModal component", () => {
  const mockOnClose = jest.fn();
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ logout: mockLogout });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders modal when isOpen is true", () => {
    render(<LogoutModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you want to logout?")
    ).toBeInTheDocument();
  });

  it("does not render modal when isOpen is false", () => {
    render(<LogoutModal isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });

  it("calls onClose when 'No' button is clicked", () => {
    render(<LogoutModal isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText("No"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose and logout when 'Yes' button is clicked", () => {
    render(<LogoutModal isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText("Yes"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});

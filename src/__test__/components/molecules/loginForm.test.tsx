import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { LoginForm } from "components/molecules/loginForm";
import { useAuth } from "../../../store/authProvider";
import { useTimer } from "../../../utils/fakeLoader";

jest.mock("../../../utils/authContext", () => ({
  useAuth: jest.fn(),
}));
jest.mock("../../../utils/fakeLoader", () => ({
  useTimer: jest.fn().mockResolvedValue(undefined),
}));

describe("LoginForm", () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ login: mockLogin });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders login form with all elements", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("displays validation error messages when inputs are empty", async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("displays validation errors for invalid email and password formats", async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(
        screen.getByText("Enter a valid email address")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Password must be at least 6 characters")
      ).toBeInTheDocument();
    });
  });

  it("calls login and navigates on successful form submission", async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(useTimer).toHaveBeenCalled());
    expect(mockLogin).toHaveBeenCalledWith({
      username: "test@example.com",
      password: "password123",
    });
  });
});

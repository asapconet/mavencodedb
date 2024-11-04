import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tables } from "components/atoms/table";
import { tableData } from "src/data/table";

if (typeof structuredClone === "undefined") {
  global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}

describe("Tables component", () => {
  it("renders table headers correctly", () => {
    render(<Tables />);

    expect(screen.getByText("USER")).toBeInTheDocument();
    expect(screen.getByText("COMMIT")).toBeInTheDocument();
    expect(screen.getByText("DATE")).toBeInTheDocument();
  });

  it("renders rows for each item in tableData", () => {
    render(<Tables />);

    tableData.forEach((item) => {
      expect(screen.getByText(item.user)).toBeInTheDocument();
      expect(screen.getByText(item.commit)).toBeInTheDocument();
      expect(screen.getByText(item.date)).toBeInTheDocument();
    });
  });

  it("displays a trash icon in each row", () => {
    render(<Tables />);
    const trashIcons = screen.getAllByTestId("trash-icon");
    expect(trashIcons.length).toBe(tableData.length);
  });
});

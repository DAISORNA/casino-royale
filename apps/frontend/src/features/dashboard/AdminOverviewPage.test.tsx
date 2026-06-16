import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { AdminOverviewPage } from "./AdminOverviewPage";
import { useAppStore } from "../../app/store";

describe("AdminOverviewPage", () => {
  beforeEach(() => {
    useAppStore.setState({
      transactions: [],
      alerts: [],
      rtes: [],
      ros: [],
      audit: []
    });
  });

  it("renders the admin dashboard", () => {
    render(<AdminOverviewPage />);
    expect(screen.getByText("Control transversal de operación y compliance")).toBeDefined();
  });
});

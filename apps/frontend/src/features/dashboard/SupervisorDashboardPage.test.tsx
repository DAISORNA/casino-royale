import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { SupervisorDashboardPage } from "./SupervisorDashboardPage";
import { useAppStore } from "../../app/store";

describe("SupervisorDashboardPage", () => {
  beforeEach(() => {
    useAppStore.setState({
      transactions: [],
      alerts: []
    });
  });

  it("renders the supervisor dashboard", () => {
    render(<SupervisorDashboardPage />);
    expect(screen.getByText("Vigilancia de sala y escalamiento interno")).toBeDefined();
  });
});

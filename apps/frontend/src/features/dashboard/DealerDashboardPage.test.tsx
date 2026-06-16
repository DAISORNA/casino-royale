import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DealerDashboardPage } from "./DealerDashboardPage";
import { useAppStore } from "../../app/store";

vi.mock("../../components/AppShell", () => ({
  useAppChrome: () => ({ openModal: vi.fn(), closeModal: vi.fn() })
}));

describe("DealerDashboardPage", () => {
  beforeEach(() => {
    useAppStore.setState({
      session: {
        id: "u-2", fullName: "Dealer Test", initials: "DT",
        role: "Dealer", station: "MESA-04"
      },
      transactions: [],
      alerts: []
    });
  });

  it("renders the dealer dashboard", () => {
    render(
      <MemoryRouter>
        <DealerDashboardPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Dealer · UC-01 Buy-in en mesa")).toBeDefined();
  });
});

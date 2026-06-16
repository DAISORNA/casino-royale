import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { useAppStore } from "../../app/store";

describe("LoginPage", () => {
  beforeEach(() => {
    useAppStore.setState({
      session: null,
      transactions: [],
      alerts: [],
      rtes: [],
      audit: []
    });
  });

  it("renders role buttons", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Cajero")).toBeDefined();
    expect(screen.getByText("Supervisor")).toBeDefined();
    expect(screen.getByText("Dealer")).toBeDefined();
    expect(screen.getByText("Oficial")).toBeDefined();
  });

  it("renders brand title", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(screen.getByText("CasinoDesk v3")).toBeDefined();
    expect(screen.getByText("AML/CFT, KYC condicional, RTE, ROS y trazabilidad regulatoria")).toBeDefined();
  });

  it("logs in as Cajero when clicking Cajero button", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const cajeroButton = screen.getByText("Cajero");
    fireEvent.click(cajeroButton);
    await waitFor(() => {
      const session = useAppStore.getState().session;
      expect(session).not.toBeNull();
      expect(session?.role).toBe("Cajero");
    });
  });

  it("renders role badges", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Caja operativa")).toBeDefined();
    expect(screen.getByText("Panel privado")).toBeDefined();
    expect(screen.getByText("Mesa de juego")).toBeDefined();
  });
});

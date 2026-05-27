import { describe, expect, it } from "vitest";
import { getRoleBadge, getRoleHome, roleCapabilities } from "./roles";

describe("role helpers", () => {
  it("maps roles to their home route", () => {
    expect(getRoleHome("Cajero")).toBe("/");
    expect(getRoleHome("Dealer")).toBe("/dealer");
    expect(getRoleHome("Oficial")).toBe("/official");
    expect(getRoleHome("Supervisor")).toBe("/supervisor");
    expect(getRoleHome("Administrador")).toBe("/admin");
  });

  it("maps roles to their display badge", () => {
    expect(getRoleBadge("Cajero")).toBe("Caja operativa");
    expect(getRoleBadge("Dealer")).toBe("Mesa de juego");
    expect(getRoleBadge("Oficial")).toBe("Panel privado");
    expect(getRoleBadge("Supervisor")).toBe("Monitoreo de sala");
    expect(getRoleBadge("Administrador")).toBe("Vista global");
  });

  it("restricts private compliance access to authorized roles", () => {
    expect(roleCapabilities.Cajero.canAccessPrivateCompliance).toBe(false);
    expect(roleCapabilities.Dealer.canAccessPrivateCompliance).toBe(false);
    expect(roleCapabilities.Oficial.canAccessPrivateCompliance).toBe(true);
    expect(roleCapabilities.Supervisor.canAccessPrivateCompliance).toBe(true);
    expect(roleCapabilities.Administrador.canAccessPrivateCompliance).toBe(true);
  });
});

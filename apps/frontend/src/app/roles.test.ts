import { describe, it, expect } from "vitest";
import { getRoleBadge, getRoleHome, roleCapabilities } from "./roles";

describe("getRoleHome", () => {
  it("maps Cajero to /", () => {
    expect(getRoleHome("Cajero")).toBe("/");
  });
  it("maps Dealer to /dealer", () => {
    expect(getRoleHome("Dealer")).toBe("/dealer");
  });
  it("maps Oficial to /official", () => {
    expect(getRoleHome("Oficial")).toBe("/official");
  });
  it("maps Supervisor to /supervisor", () => {
    expect(getRoleHome("Supervisor")).toBe("/supervisor");
  });
  it("maps Administrador to /admin", () => {
    expect(getRoleHome("Administrador")).toBe("/admin");
  });
});

describe("getRoleBadge", () => {
  it("maps Cajero to Caja operativa", () => {
    expect(getRoleBadge("Cajero")).toBe("Caja operativa");
  });
  it("maps Dealer to Mesa de juego", () => {
    expect(getRoleBadge("Dealer")).toBe("Mesa de juego");
  });
  it("maps Oficial to Panel privado", () => {
    expect(getRoleBadge("Oficial")).toBe("Panel privado");
  });
  it("maps Supervisor to Monitoreo de sala", () => {
    expect(getRoleBadge("Supervisor")).toBe("Monitoreo de sala");
  });
  it("maps Administrador to Vista global", () => {
    expect(getRoleBadge("Administrador")).toBe("Vista global");
  });
});

describe("roleCapabilities", () => {
  describe("Cajero", () => {
    const caps = roleCapabilities.Cajero;
    it("can buy-in, cash-out, run KYC, raise manual alert", () => {
      expect(caps.canBuyIn).toBe(true);
      expect(caps.canCashOut).toBe(true);
      expect(caps.canRunKyc).toBe(true);
      expect(caps.canRaiseManualAlert).toBe(true);
    });
    it("cannot approve PEP, review RTE, create ROS, access private compliance", () => {
      expect(caps.canApprovePep).toBe(false);
      expect(caps.canReviewRte).toBe(false);
      expect(caps.canCreateRos).toBe(false);
      expect(caps.canAccessPrivateCompliance).toBe(false);
    });
  });

  describe("Dealer", () => {
    const caps = roleCapabilities.Dealer;
    it("can buy-in, run KYC, raise manual alert", () => {
      expect(caps.canBuyIn).toBe(true);
      expect(caps.canCashOut).toBe(false);
      expect(caps.canRunKyc).toBe(true);
      expect(caps.canRaiseManualAlert).toBe(true);
    });
    it("cannot approve PEP, review RTE, create ROS, access private compliance", () => {
      expect(caps.canApprovePep).toBe(false);
      expect(caps.canReviewRte).toBe(false);
      expect(caps.canCreateRos).toBe(false);
      expect(caps.canAccessPrivateCompliance).toBe(false);
    });
  });

  describe("Oficial", () => {
    const caps = roleCapabilities.Oficial;
    it("cannot buy-in, cash-out, run KYC, raise manual alert", () => {
      expect(caps.canBuyIn).toBe(false);
      expect(caps.canCashOut).toBe(false);
      expect(caps.canRunKyc).toBe(false);
      expect(caps.canRaiseManualAlert).toBe(false);
    });
    it("can approve PEP, review RTE, create ROS, access private compliance", () => {
      expect(caps.canApprovePep).toBe(true);
      expect(caps.canReviewRte).toBe(true);
      expect(caps.canCreateRos).toBe(true);
      expect(caps.canAccessPrivateCompliance).toBe(true);
    });
  });

  describe("Supervisor", () => {
    const caps = roleCapabilities.Supervisor;
    it("cannot buy-in, cash-out, run KYC, approve PEP, review RTE, create ROS", () => {
      expect(caps.canBuyIn).toBe(false);
      expect(caps.canCashOut).toBe(false);
      expect(caps.canRunKyc).toBe(false);
      expect(caps.canApprovePep).toBe(false);
      expect(caps.canReviewRte).toBe(false);
      expect(caps.canCreateRos).toBe(false);
    });
    it("can raise manual alert and access private compliance", () => {
      expect(caps.canRaiseManualAlert).toBe(true);
      expect(caps.canAccessPrivateCompliance).toBe(true);
    });
  });

  describe("Administrador", () => {
    const caps = roleCapabilities.Administrador;
    it("has all capabilities", () => {
      expect(caps.canBuyIn).toBe(true);
      expect(caps.canCashOut).toBe(true);
      expect(caps.canRunKyc).toBe(true);
      expect(caps.canRaiseManualAlert).toBe(true);
      expect(caps.canApprovePep).toBe(true);
      expect(caps.canReviewRte).toBe(true);
      expect(caps.canCreateRos).toBe(true);
      expect(caps.canAccessPrivateCompliance).toBe(true);
    });
  });
});

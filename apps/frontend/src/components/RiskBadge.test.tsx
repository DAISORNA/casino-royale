import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RiskBadge } from "./RiskBadge";

describe("RiskBadge", () => {
  it("renders the green risk state", () => {
    render(<RiskBadge risk="VERDE" />);

    expect(screen.getByText("VERDE")).toHaveClass("badge-green");
  });

  it("renders the yellow risk state", () => {
    render(<RiskBadge risk="AMARILLO" />);

    expect(screen.getByText("AMARILLO")).toHaveClass("badge-yellow");
  });

  it("renders the red risk state", () => {
    render(<RiskBadge risk="ROJO" />);

    expect(screen.getByText("ROJO")).toHaveClass("badge-red");
  });
});

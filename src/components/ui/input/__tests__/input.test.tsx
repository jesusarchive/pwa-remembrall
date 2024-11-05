import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Input from "..";

describe("Input", () => {
  test("Should render input component", () => {
    render(<Input testId="input" />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  test("Should render input component with className", () => {
    render(<Input testId="input" className="input" />);
    expect(screen.getByTestId("input")).toHaveClass("input");
  });

  test("Should call onChange function", () => {
    const onChange = vi.fn();
    render(<Input testId="input" onChange={onChange} />);
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "Test" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("Should not call onChange function when disabled", () => {
    const onChange = vi.fn();
    render(<Input testId="input" onChange={onChange} disabled />);
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "Test" } });
    expect(onChange).not.toHaveBeenCalled();
  });
});

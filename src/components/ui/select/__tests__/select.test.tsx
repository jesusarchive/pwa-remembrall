import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Select from "..";

describe("Select", () => {
  test("Should render select component", () => {
    render(<Select testId="select" />);
    expect(screen.getByTestId("select")).toBeInTheDocument();
  });

  test("Should render select component with className", () => {
    render(<Select testId="select" className="select" />);
    expect(screen.getByTestId("select")).toHaveClass("select");
  });

  test("Should render select component with options", () => {
    render(
      <Select testId="select" options={[{ value: "1", label: "Option 1" }]} />
    );
    expect(screen.getByTestId("select-option-1")).toBeInTheDocument();
  });

  test("Should call onChange function", () => {
    const onChange = vi.fn();
    render(<Select testId="select" onChange={onChange} />);
    const select = screen.getByTestId("select");
    fireEvent.change(select, { target: { value: "1" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("Should not call onChange function when disabled", () => {
    const onChange = vi.fn();
    render(<Select testId="select" onChange={onChange} disabled />);
    const select = screen.getByTestId("select");
    fireEvent.change(select, { target: { value: "1" } });
    expect(onChange).not.toHaveBeenCalled();
  });
});

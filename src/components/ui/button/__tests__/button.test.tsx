import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Button from "..";

describe("Button", () => {
  test("Should render button component", () => {
    render(<Button testId="button">Button</Button>);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  test("Should render button component with className", () => {
    render(
      <Button testId="button" className="button">
        Button
      </Button>
    );
    expect(screen.getByTestId("button")).toHaveClass("button");
  });

  test("Should call onClick function", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Button</Button>);
    const button = screen.getByText("Button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("Should not call onClick function when disabled", () => {
    const onClick = vi.fn();
    render(
      <Button testId="button" onClick={onClick} disabled>
        Button
      </Button>
    );
    const button = screen.getByText("Button");
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});

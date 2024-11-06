import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import MemoryCard from "../memory-card";

describe("MemoryCard", () => {
  it("should display the value when showValue is true", () => {
    render(
      <MemoryCard
        testId="memory-card"
        value="A"
        showValue={true}
        onClick={() => {}}
      />
    );
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it('should display "?" when showValue is false', () => {
    render(
      <MemoryCard
        testId="memory-card"
        value="A"
        showValue={false}
        onClick={() => {}}
      />
    );
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("should call onClick when clicked and not disabled", () => {
    const handleClick = vi.fn();
    render(
      <MemoryCard
        testId="memory-card"
        value="A"
        showValue={true}
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByText("A"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when clicked and disabled", () => {
    const handleClick = vi.fn();
    render(
      <MemoryCard
        testId="memory-card"
        value="A"
        showValue={true}
        onClick={handleClick}
        disabled={true}
      />
    );
    fireEvent.click(screen.getByText("A"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should have green background when isValidGuess is true", () => {
    render(
      <MemoryCard
        testId="memory-card"
        value="A"
        showValue={true}
        onClick={() => {}}
        isValidGuess={true}
      />
    );
    expect(screen.getByTestId("memory-card")).toHaveClass("bg-green-500");
  });

  it("should have red background when isValidGuess is false", () => {
    render(
      <MemoryCard
        testId="memory-card"
        value="A"
        showValue={true}
        onClick={() => {}}
        isValidGuess={false}
      />
    );
    expect(screen.getByTestId("memory-card")).toHaveClass("bg-red-500");
  });
});

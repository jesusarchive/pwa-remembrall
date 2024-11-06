import { act, renderHook } from "@testing-library/react-hooks";
import { vi } from "vitest";

import { useTimer } from "../use-timer";

describe("useTimer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should initialize with the given initial time", () => {
    const { result } = renderHook(() => useTimer(5000));
    expect(result.current.time).toBe(5000);
    expect(result.current.isRunning).toBe(false);
  });

  it("should start the timer", () => {
    const { result } = renderHook(() => useTimer(5000));
    act(() => {
      result.current.start();
    });
    expect(result.current.isRunning).toBe(true);
  });

  it("should stop the timer", () => {
    const { result } = renderHook(() => useTimer(5000));
    act(() => {
      result.current.start();
    });
    act(() => {
      result.current.stop();
    });
    expect(result.current.isRunning).toBe(false);
  });

  it("should reset the timer", () => {
    const { result } = renderHook(() => useTimer(5000));
    act(() => {
      result.current.start();
    });
    act(() => {
      result.current.reset();
    });
    expect(result.current.time).toBe(5000);
  });

  it("should count down the time correctly", () => {
    const { result } = renderHook(() => useTimer(5000));
    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.time).toBe(4000);

    act(() => {
      vi.advanceTimersByTime(4000);
    });
    expect(result.current.time).toBe(0);
    expect(result.current.isRunning).toBe(false);
  });

  it("should stop the timer when time reaches zero", () => {
    const { result } = renderHook(() => useTimer(1000));
    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.time).toBe(0);
    expect(result.current.isRunning).toBe(false);
  });
});

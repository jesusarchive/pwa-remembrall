import { render, screen } from "@testing-library/react";

import { AppWrapper } from "@/test/test.utils";

import GamePage from "../game-page";

describe("GamePage", () => {
  test("should render correctly", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
  });
});

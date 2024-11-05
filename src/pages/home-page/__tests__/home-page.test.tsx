import { render, screen } from "@testing-library/react";

import { AppWrapper } from "@/test/test.utils";

import HomePage from "../home-page";

describe("HomePage", () => {
  test("should render correctly", () => {
    render(<HomePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";

import { AppWrapper } from "@/test/test.utils";

import HomePage from "../home-page";

describe("HomePage", () => {
  test("should render correctly", () => {
    render(<HomePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  test("should set username", () => {
    render(<HomePage />, { wrapper: AppWrapper });
    const usernameInput = screen.getByTestId("username-input");
    const setUsernameButton = screen.getByTestId("join-button");

    expect(usernameInput).toBeInTheDocument();
    expect(setUsernameButton).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: "John" } });
    fireEvent.click(setUsernameButton);

    expect(localStorage.getItem("user")).toMatchInlineSnapshot(`"{"id":"john","name":"John"}"`);
  });
});

import { fireEvent, render, screen } from "@testing-library/react";

import { AppWrapper } from "@/test/test.utils";

import GamePage from "../game-page";

describe("GamePage", () => {
  test("should render correctly", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
  });

  test("should render game page with Click the play button to start a new game message", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
    expect(
      screen.getByText("Click the play button to start a new game")
    ).toBeInTheDocument();
    expect(screen.getByTestId("game-page-play-button")).toBeInTheDocument();
  });

  test("should start game on click play button", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("game-page-play-button"));
    expect(screen.getByText("Memorize the cards")).toBeInTheDocument();
    expect(screen.getByTestId("game-page-timer")).toMatchInlineSnapshot(`
      <span
        data-testid="game-page-timer"
      >
        Time left: 
        5
         seconds
      </span>
    `);
    expect(screen.getByTestId("game-page-card-grid")).toBeInTheDocument();
    expect(screen.getByTestId("game-page-memory-card-1")).toBeInTheDocument();
    setTimeout(() => {
      expect(screen.getByText("Where is the number")).toBeInTheDocument();
    }, 5000);
  });

  test("should show red card when wrong guess", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("game-page-play-button"));

    expect(screen.getByTestId("game-page-card-grid")).toBeInTheDocument();
    expect(screen.getByTestId("game-page-memory-card-1")).toBeInTheDocument();
    setTimeout(() => {
      const valueToGuess = screen
        .getByTestId("game-page-message")
        .textContent?.match(/\d+/)?.[0];
      const formattedValueToGuess = valueToGuess ? Number(valueToGuess) : 0;

      let wrongGuess = 0;

      if (formattedValueToGuess === 1) {
        wrongGuess = 2;
      } else if (formattedValueToGuess === 9) {
        wrongGuess = 8;
      } else {
        wrongGuess = formattedValueToGuess + 1;
      }

      fireEvent.click(
        screen.getByTestId(`game-page-memory-card-${wrongGuess}`)
      );
      expect(
        screen.getByTestId(`game-page-memory-card-${wrongGuess}`)
      ).toHaveClass("bg-red-500");
    }, 5000);
  });

  test("should show green card when valid guess and score should be updated", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("game-page-play-button"));

    expect(screen.getByTestId("game-page-card-grid")).toBeInTheDocument();
    expect(screen.getByTestId("game-page-memory-card-1")).toBeInTheDocument();
    setTimeout(() => {
      const valueToGuess = screen
        .getByTestId("game-page-message")
        .textContent?.match(/\d+/)?.[0];
      const formattedValueToGuess = valueToGuess ? Number(valueToGuess) : 0;

      fireEvent.click(
        screen.getByTestId(`game-page-memory-card-${formattedValueToGuess}`)
      );
      expect(
        screen.getByTestId(`game-page-memory-card-${formattedValueToGuess}`)
      ).toHaveClass("bg-green-500");
    }, 5000);

    setTimeout(() => {
      expect(screen.getByTestId("game-page-scoreboard")).toHaveTextContent(
        "Points: 10"
      );
    }, 2000);
  });

  test("should change game level", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("level-select"), {
      target: { value: "easy" },
    });
    expect(screen.getByTestId("level-select")).toHaveValue("easy");
    fireEvent.change(screen.getByTestId("level-select"), {
      target: { value: "medium" },
    });
    expect(screen.getByTestId("level-select")).toHaveValue("medium");
    fireEvent.change(screen.getByTestId("level-select"), {
      target: { value: "hard" },
    });
    expect(screen.getByTestId("level-select")).toHaveValue("hard");
  });

  test("should reset game when changing level", () => {
    render(<GamePage />, { wrapper: AppWrapper });
    expect(screen.getByTestId("game-page")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("game-page-play-button"));
    expect(screen.getByTestId("game-page-card-grid")).toBeInTheDocument();
    expect(screen.getByTestId("game-page-memory-card-1")).toBeInTheDocument();
    setTimeout(() => {
      fireEvent.change(screen.getByTestId("level-select"), {
        target: { value: "easy" },
      });
      expect(screen.getByTestId("game-page-card-grid")).not.toBeInTheDocument();
      expect(
        screen.getByTestId("game-page-memory-card-1")
      ).not.toBeInTheDocument();
    }, 5000);
  });
});

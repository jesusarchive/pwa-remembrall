import Button from "@/components/ui/button";

import MemoryCard from "./components/memory-card";
import { useMemoryGame } from "./hooks/use-memory-game";

export default function MemoryGame() {
  const {
    message,
    initialized,
    time,
    shuffledValues,
    clickedValues,
    valueToGuess,
    showValues,
    startNewGame,
    guess,
  } = useMemoryGame();

  return (
    <div className="flex flex-col gap-6 md:gap-8 p-4">
      <span
        data-testid="game-page-message"
        className="text-base md:text-xl font-bold self-center"
      >
        {message}
      </span>
      {initialized && (
        <>
          <span data-testid="game-page-timer">
            Time left: {time / 1000} seconds
          </span>
          <div className="flex flex-col items-center justify-center">
            <div
              data-testid="game-page-card-grid"
              className="grid grid-cols-3 gap-4"
            >
              {shuffledValues.map((value) => (
                <MemoryCard
                  testId={`game-page-memory-card-${value}`}
                  key={value}
                  value={String(value)}
                  showValue={clickedValues.includes(value) ? true : showValues}
                  onClick={() => guess(value)}
                  isValidGuess={
                    clickedValues.includes(value)
                      ? value === valueToGuess
                      : undefined
                  }
                  disabled={showValues || !!clickedValues.length}
                />
              ))}
            </div>
          </div>
        </>
      )}
      <div className="w-full flex items-center justify-center">
        <Button testId="game-page-play-button" onClick={startNewGame}>
          Play
        </Button>
      </div>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";

import useGameContext from "../../providers/game-provider/game-provider.hook";
import MemoryCard from "./components/memory-card";
import { useTimer } from "./hooks/use-timer";

const MEMORY_GAME_TIME = {
  easy: 5000,
  medium: 4000,
  hard: 3000,
};

const MEMORY_GAME_SCORE = {
  easy: 10,
  medium: 20,
  hard: 30,
};

const GAME_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export default function MemoryGame() {
  const {
    state: { level },
  } = useGameContext();

  const time = MEMORY_GAME_TIME[level ?? "easy"];
  const score = MEMORY_GAME_SCORE[level ?? "easy"];

  const { time: timeLeft, start, stop, reset, isRunning } = useTimer(time);

  const [showValues, setShowValues] = useState(true);

  const [clickedValues, setClickedValues] = useState<
    (typeof GAME_VALUES)[number][]
  >([]);

  const shuffledValues = useMemo(() => {
    return [...GAME_VALUES].sort(() => Math.random() - 0.5);
  }, []);

  const currentNumberToGuess = useMemo(() => {
    return GAME_VALUES[Math.floor(Math.random() * GAME_VALUES.length)];
  }, []);

  useEffect(() => {
    if (!isRunning) {
      setShowValues(false);
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col gap-8 p-4">
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
      <span>time left {timeLeft}</span>

      {showValues && (
        <span className="text-xl font-bold self-center">
          Memorize the cards
        </span>
      )}
      {!showValues && (
        <span className="text-xl font-bold self-center">
          Where is the number {currentNumberToGuess}?
        </span>
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
          {shuffledValues.map((value) => {
            return (
              <MemoryCard
                key={value}
                value={String(value)}
                showValue={true}
                onClick={() => setClickedValues([...clickedValues, value])}
                isValidGuess={
                  clickedValues.includes(value)
                    ? value === currentNumberToGuess
                    : undefined
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

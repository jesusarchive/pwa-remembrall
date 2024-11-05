import { useCallback, useEffect, useMemo, useState } from "react";

import Button from "@/components/ui/button";

import useGameContext from "../../providers/game-provider/game-provider.hook";
import { setScore } from "../../providers/game-provider/game-provider.state";
import MemoryCard from "./components/memory-card";
import { useTimer } from "./hooks/use-timer";

const MEMORY_GAME_TIME = {
  easy: 5000,
  medium: 4000,
  hard: 3000,
} as const;

const MEMORY_GAME_SCORE = {
  easy: 10,
  medium: 20,
  hard: 30,
} as const;

const GAME_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(array: number[]): number[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const {
    state: { level, score },
    dispatch,
  } = useGameContext();

  const timer = useTimer(MEMORY_GAME_TIME[level ?? "easy"]);

  const [initialized, setInitialized] = useState(false);
  const [shuffledValues, setShuffledValues] = useState<number[]>(() =>
    shuffle(GAME_VALUES)
  );
  const [valueToGuess, setValueToGuess] = useState<number | null>(null);
  const [showValues, setShowValues] = useState(true);
  const [clickedValues, setClickedValues] = useState<number[]>([]);

  const onMemoryCardClick = useCallback(
    (value: number) => {
      setClickedValues((prevClickedValues) => [...prevClickedValues, value]);
      timer.stop();

      if (value === valueToGuess) {
        setScore(dispatch)({
          score: (score ?? 0) + MEMORY_GAME_SCORE[level ?? "easy"],
        });
      }
    },
    [dispatch, level, valueToGuess, score, timer]
  );

  const resetGameValues = useCallback(() => {
    timer.stop();
    timer.reset();
    setScore(dispatch)({ score: 0 });
    setClickedValues([]);
    setShuffledValues(shuffle(GAME_VALUES));
    setValueToGuess(
      GAME_VALUES[Math.floor(Math.random() * GAME_VALUES.length)]
    );
    setShowValues(true);
  }, [timer, dispatch]);

  const onPlayClick = useCallback(() => {
    resetGameValues();
    if (!initialized) {
      setInitialized(true);
    }
    timer.start();
  }, [initialized, resetGameValues, timer]);

  useEffect(() => {
    if (!timer.isRunning) {
      setShowValues(false);
    }
  }, [timer.isRunning]);

  useEffect(() => {
    setInitialized(false);
  }, [level]);

  const gameMessage = useMemo(() => {
    if (!initialized) {
      return "Click the play button to start a new game";
    }
    return showValues
      ? "Memorize the cards"
      : `Where is the number ${valueToGuess}?`;
  }, [initialized, showValues, valueToGuess]);

  return (
    <div className="flex flex-col gap-8 p-4">
      <span className="text-xl font-bold self-center">{gameMessage}</span>
      {initialized && (
        <>
          <span>Time left: {timer.time / 1000} seconds</span>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {shuffledValues.map((value) => (
                <MemoryCard
                  key={value}
                  value={String(value)}
                  showValue={clickedValues.includes(value) ? true : showValues}
                  onClick={() => onMemoryCardClick(value)}
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
        <Button onClick={onPlayClick}>Play</Button>
      </div>
    </div>
  );
}

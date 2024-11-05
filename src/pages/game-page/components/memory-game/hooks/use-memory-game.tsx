import { useCallback, useEffect, useMemo, useState } from "react";

import useGameContext from "@/pages/game-page/providers/game-provider/game-provider.hook";
import { setScore } from "@/pages/game-page/providers/game-provider/game-provider.state";

import { useTimer } from "./use-timer";

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

export function useMemoryGame() {
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

  const guess = useCallback(
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

  const reset = useCallback(() => {
    timer.stop();
    timer.reset();
    setClickedValues([]);
    setShuffledValues(shuffle(GAME_VALUES));
    setValueToGuess(
      GAME_VALUES[Math.floor(Math.random() * GAME_VALUES.length)]
    );
    setShowValues(true);
  }, [timer]);

  const play = useCallback(() => {
    reset();
    if (!initialized) {
      setInitialized(true);
    }
    timer.start();
  }, [initialized, reset, timer]);

  useEffect(() => {
    if (!timer.isRunning) {
      setShowValues(false);
    }
  }, [timer.isRunning]);

  useEffect(() => {
    setInitialized(false);
    setScore(dispatch)({
      score: 0,
    });
  }, [dispatch, level]);

  const message = useMemo(() => {
    if (!initialized) {
      return "Click the play button to start a new game";
    }
    return showValues
      ? "Memorize the cards"
      : `Where is the number ${valueToGuess}?`;
  }, [initialized, showValues, valueToGuess]);

  return {
    initialized,
    shuffledValues,
    valueToGuess,
    showValues,
    clickedValues,
    guess,
    play,
    time: timer.time,
    message,
  };
}

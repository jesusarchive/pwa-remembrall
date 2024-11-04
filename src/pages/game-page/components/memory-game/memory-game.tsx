import { useEffect, useState } from "react";

import Button from "@/components/ui/button";

import useGameContext from "../../providers/game-provider/game-provider.hook";
import { setScore } from "../../providers/game-provider/game-provider.state";
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

const GAME_VALUES: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(array: number[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const {
    state: { level, score },
    dispatch,
  } = useGameContext();

  const [initilized, setInitilized] = useState(false);
  const [shuffledValues, setShuffledValues] = useState(shuffle(GAME_VALUES));
  const [numberToGuess, setNumberToGuess] = useState<number | null>(null);

  const { time, start, stop, reset, isRunning } = useTimer(
    MEMORY_GAME_TIME[level ?? "easy"]
  );

  const [showValues, setShowValues] = useState(true);

  const [clickedValues, setClickedValues] = useState<
    (typeof GAME_VALUES)[number][]
  >([]);

  useEffect(() => {
    if (!isRunning) {
      setShowValues(false);
    }
  }, [isRunning]);

  const onMemoryCardClick = (value: (typeof GAME_VALUES)[number]) => {
    setClickedValues([...clickedValues, value]);
    stop();

    if (value === numberToGuess) {
      setScore(dispatch)({
        score: (score ?? 0) + MEMORY_GAME_SCORE[level ?? "easy"],
      });
    }
  };

  const onPlayClick = () => {
    setClickedValues([]);
    setShuffledValues(shuffle(GAME_VALUES));
    setNumberToGuess(
      GAME_VALUES[Math.floor(Math.random() * GAME_VALUES.length)]
    );
    setShowValues(true);

    if (!initilized) {
      setInitilized(true);
      start();
    } else {
      stop();
      reset();
      start();
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button> */}
      <span>time left {time}</span>

      {!initilized && (
        <span className="text-xl font-bold self-center">
          Click the play button to start a new game
        </span>
      )}
      {initilized && (
        <>
          {showValues && (
            <span className="text-xl font-bold self-center">
              Memorize the cards
            </span>
          )}
          {!showValues && (
            <span className="text-xl font-bold self-center">
              Where is the number {numberToGuess}?
            </span>
          )}
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {shuffledValues.map((value) => {
                return (
                  <MemoryCard
                    key={value}
                    value={String(value)}
                    showValue={
                      clickedValues.includes(value) ? true : showValues
                    }
                    onClick={() => onMemoryCardClick(value)}
                    isValidGuess={
                      clickedValues.includes(value)
                        ? value === numberToGuess
                        : undefined
                    }
                    disabled={showValues || !!clickedValues.length}
                  />
                );
              })}
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

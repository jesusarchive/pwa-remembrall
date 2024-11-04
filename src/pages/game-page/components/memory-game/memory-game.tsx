import { useMemo } from "react";

import useGameContext from "../../providers/game-provider/game-provider.hook";
import MemoryCard from "./components/memory-card";

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

export default function MemoryGame() {
  const {
    state: { level },
  } = useGameContext();

  const time = MEMORY_GAME_TIME[level ?? "easy"];
  const score = MEMORY_GAME_SCORE[level ?? "easy"];

  const gameValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const shuffledValues = useMemo(() => {
    return [...gameValues].sort(() => Math.random() - 0.5);
  }, [gameValues]);

  return (
    <div className="flex flex-col gap-8 p-4">
      <span className="text-xl font-bold self-center">Memorize the cards</span>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
          {shuffledValues.map((value) => (
            <MemoryCard
              key={value}
              value={String(value)}
              onClick={console.log}
              showValue
            />
          ))}
        </div>
      </div>
    </div>
  );
}

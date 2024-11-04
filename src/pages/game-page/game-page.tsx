import { useState } from "react";

import Button from "@/components/ui/button";

import GameHeader from "./components/game-header";
import MemoryGame from "./components/memory-game";
import GameProvider from "./providers/game-provider/game-provider";
import useGameContext from "./providers/game-provider/game-provider.hook";

function GamePageInternal() {
  const {
    state: { score },
  } = useGameContext();

  const [initilized, setInitilized] = useState(false);

  const onInitClick = () => {
    setInitilized(true);
  };

  return (
    <div className="h-dvh w-dvw flex flex-col">
      <GameHeader />
      <div className="h-full w-full flex flex-col gap-4">
        <div className="w-full flex justify-end p-6">
          <span className="text-xl">Points: {score ?? 0}</span>
        </div>
        {!initilized && (
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold self-center">
              Click the play button to start a new game
            </span>
            <Button className="self-center" onClick={onInitClick}>
              Play
            </Button>
          </div>
        )}
        {initilized && <MemoryGame />}
      </div>
    </div>
  );
}

export default function GamePage() {
  return (
    <GameProvider>
      <GamePageInternal />
    </GameProvider>
  );
}

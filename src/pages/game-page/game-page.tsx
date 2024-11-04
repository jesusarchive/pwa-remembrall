import GameHeader from "./components/game-header";
import MemoryGame from "./components/memory-game";
import GameProvider from "./providers/game-provider/game-provider";
import useGameContext from "./providers/game-provider/game-provider.hook";

function GamePageInternal() {
  const {
    state: { score },
  } = useGameContext();

  return (
    <div className="h-dvh w-dvw flex flex-col">
      <GameHeader />
      <div className="h-full w-full flex flex-col gap-4">
        <div className="w-full flex justify-end p-6">
          <span className="text-xl">Points: {score ?? 0}</span>
        </div>
        <MemoryGame />
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

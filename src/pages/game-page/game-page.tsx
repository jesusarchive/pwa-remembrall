import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "@/providers/user-provider/user-provider.hook";

import GameHeader from "./components/game-header";
import MemoryGame from "./components/memory-game";
import Scoreboard from "./components/scoreboard/scoreboard";
import GameProvider from "./providers/game-provider/game-provider";

function GamePageInternal() {
  const navigate = useNavigate();
  const {
    state: { user },
  } = useUser();

  useEffect(() => {
    if (!user?.name) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div data-testid="game-page" className="h-dvh w-dvw flex flex-col">
      <GameHeader />
      <div className="h-full w-full flex flex-col gap-4">
        <Scoreboard />
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

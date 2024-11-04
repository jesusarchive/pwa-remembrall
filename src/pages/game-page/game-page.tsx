import useUser from "@/providers/user-provider/user-provider.hook";

import GameProvider from "./providers/game-provider/game-provider";

function GamePageInternal() {
  const { state } = useUser();

  return <div>{state?.user?.name}</div>;
}

export default function GamePage() {
  return (
    <GameProvider>
      <GamePageInternal />
    </GameProvider>
  );
}

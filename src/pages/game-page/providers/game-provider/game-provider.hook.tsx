import React from "react";

import { GameContext } from "./game-provider.context";

function useGameContext() {
  const context = React.useContext(GameContext)!;
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}

export default useGameContext;

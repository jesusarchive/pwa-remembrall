import React from "react";

import { GameContext } from "./game-provider.context";
import { getDefaultState, userReducer } from "./game-provider.state";

type GameProviderProps = {
  children: React.ReactNode;
};

function GameProvider({ children }: Readonly<GameProviderProps>) {
  const [state, dispatch] = React.useReducer(userReducer, getDefaultState());

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;

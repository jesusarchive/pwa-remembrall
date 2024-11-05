import React from "react";

import { Action, State } from "./game-provider.state";

export const GameContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

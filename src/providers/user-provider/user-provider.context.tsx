import React from "react";

import { Action, State } from "./user-provider.state";

export const UserContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

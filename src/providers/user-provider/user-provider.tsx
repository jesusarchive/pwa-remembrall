import React from "react";

import { UserContext } from "./user-provider.context";
import { getDefaultState, userReducer } from "./user-provider.state";

type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({ children }: Readonly<UserProviderProps>) {
  const [state, dispatch] = React.useReducer(userReducer, getDefaultState());

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;

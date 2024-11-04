import React from "react";

export type UserType = {
  id: string;
  name: string;
};

type ActionKind = (typeof ActionKind)[keyof typeof ActionKind];
const ActionKind = {
  SET_USER: "SET_USER",
} as const;

export type State = {
  user: UserType | undefined;
};

type SetUserPayload = {
  user: UserType | undefined;
};

export type Action = {
  type: ActionKind;
  payload: SetUserPayload;
};

export const getDefaultState = (): State => ({
  user: undefined,
});

export function userReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionKind.SET_USER: {
      return {
        ...state,
        user: (action.payload as SetUserPayload).user,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const setUser =
  (dispatch: React.Dispatch<Action>) =>
  ({ user }: SetUserPayload) => {
    dispatch({ type: ActionKind.SET_USER, payload: { user } });
  };

import React from "react";

type ActionKind = (typeof ActionKind)[keyof typeof ActionKind];
const ActionKind = {
  SET_LEVEL: "SET_LEVEL",
  SET_SCORE: "SET_SCORE",
} as const;

export type Level = (typeof Level)[keyof typeof Level];
export const Level = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
} as const;

export type State = {
  level: Level | undefined;
  score: number | undefined;
};

type SetLevelPayload = {
  level: Level | undefined;
};

type SetScorePayload = {
  score: number | undefined;
};

export type Action = {
  type: ActionKind;
  payload: SetLevelPayload | SetScorePayload;
};

export const getDefaultState = (): State => ({
  level: undefined,
  score: undefined,
});

export function userReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionKind.SET_LEVEL: {
      return {
        ...state,
        level: (action.payload as SetLevelPayload).level,
      };
    }
    case ActionKind.SET_SCORE: {
      return {
        ...state,
        score: (action.payload as SetScorePayload).score,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const setLevel =
  (dispatch: React.Dispatch<Action>) =>
  ({ level }: SetLevelPayload) => {
    dispatch({ type: ActionKind.SET_LEVEL, payload: { level } });
  };

export const setScore =
  (dispatch: React.Dispatch<Action>) =>
  ({ score }: SetScorePayload) => {
    dispatch({ type: ActionKind.SET_SCORE, payload: { score } });
  };

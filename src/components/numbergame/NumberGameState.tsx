"use client";

import React from "react";

interface NumberGameState {
  you: number;
  computer: number;
  sum: number;
  youVisual: number;
  difficulty: string;
}

type NumberGameAction =
  | {
      type: "setYou" | "setComputer" | "setSum" | "setYouVisual";
      value: number;
    }
  | { type: "setDifficulty"; value: string };

const initialNumberGameState: NumberGameState = {
  you: 1,
  computer: 0,
  sum: 0,
  youVisual: 0,
  difficulty: "Hard",
};

function reducer(state: NumberGameState, action: NumberGameAction) {
  switch (action.type) {
    case "setYou":
      return {
        ...state,
        you: action.value < 1 ? 1 : action.value > 10 ? 10 : action.value,
      };
    case "setComputer":
      return {
        ...state,
        computer: action.value < 1 ? 0 : action.value > 10 ? 10 : action.value,
      };
    case "setSum":
      return {
        ...state,
        sum: action.value,
      };
    case "setYouVisual":
      return {
        ...state,
        youVisual: action.value,
      };
    case "setDifficulty":
      return {
        ...state,
        difficulty: action.value,
      };
  }
}

export const NumberGameStateContext = React.createContext<NumberGameState>(
  initialNumberGameState
);
export const NumberGameDispatchContext = React.createContext<
  React.Dispatch<NumberGameAction>
>(() => null);

type NumberGameStateProviderProps = { children: React.ReactNode };

export function NumberGameStateProvider({
  children,
}: NumberGameStateProviderProps) {
  const [NumberGameState, dispatch] = React.useReducer(
    reducer,
    initialNumberGameState
  );

  return (
    <NumberGameStateContext.Provider value={NumberGameState}>
      <NumberGameDispatchContext.Provider value={dispatch}>
        {children}
      </NumberGameDispatchContext.Provider>
    </NumberGameStateContext.Provider>
  );
}

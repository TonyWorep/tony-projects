"use client";

import React from "react";

interface MarienbadGameState {
  col: number;
  winner: boolean;
  difficulty: string;
  plates: Array<React.ReactElement[]>;
  platesAmount: number[];
}

type MarienbadGameAction =
  | {
      type: "setCol";
      value: number;
    }
  | {
      type: "setWinner";
      value: boolean;
    }
  | {
      type: "setPlates";
      value: Array<React.ReactElement[]>;
    }
  | {
      type: "setPlatesAmount";
      value: number[];
    };

const initialMarienbadGameState: MarienbadGameState = {
  col: 0,
  winner: false,
  difficulty: "Hard",
  plates: [],
  platesAmount: [1, 3, 5, 7],
};

function reducer(state: MarienbadGameState, action: MarienbadGameAction) {
  switch (action.type) {
    case "setCol":
      return {
        ...state,
        col: action.value,
      };
    case "setWinner":
      return {
        ...state,
        winner: action.value,
      };
    case "setPlates":
      return {
        ...state,
        plates: action.value,
      };
    case "setPlatesAmount":
      return {
        ...state,
        platesAmount: action.value,
      };
  }
}

export const MarienbadGameStateContext =
  React.createContext<MarienbadGameState>(initialMarienbadGameState);

export const MarienbadGameDispatchContext = React.createContext<
  React.Dispatch<MarienbadGameAction>
>(() => null);

type MarienbadGameStateProviderProps = { children: React.ReactNode };

export function MarienbadGameStateProvider({
  children,
}: MarienbadGameStateProviderProps) {
  const [MarienbadGameState, dispatch] = React.useReducer(
    reducer,
    initialMarienbadGameState
  );

  return (
    <MarienbadGameStateContext.Provider value={MarienbadGameState}>
      <MarienbadGameDispatchContext.Provider value={dispatch}>
        {children}
      </MarienbadGameDispatchContext.Provider>
    </MarienbadGameStateContext.Provider>
  );
}

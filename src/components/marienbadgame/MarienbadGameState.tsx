"use client";

import React from "react";

interface MarienbadGameState {
  col: number;
  picked: number;
  played: boolean;
  winner: boolean;
  difficulty: string;
  plates: React.ReactElement[];
  platesAmount: React.ReactElement[];
}

type MarienbadGameAction =
  | {
      type: "setCol" | "setPicked";
      value: number;
    }
  | {
      type: "setPlayed" | "setWinner";
      value: boolean;
    }
  | {
      type: "setPlates" | "setPlatesAmount";
      value: React.ReactElement[];
    };

const initialMarienbadGameState: MarienbadGameState = {
  col: 0,
  picked: 0,
  played: false,
  winner: false,
  difficulty: "Hard",
  plates: [],
  platesAmount: [],
};

function reducer(state: MarienbadGameState, action: MarienbadGameAction) {
  switch (action.type) {
    case "setCol":
      return {
        ...state,
        col: action.value,
      };
    case "setPicked":
      return {
        ...state,
        picked: action.value,
      };
    case "setPlayed":
      return {
        ...state,
        played: action.value,
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

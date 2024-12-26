"use client";

import React from "react";

interface BoxesGameState {
  boxes: React.ReactElement[];
  youBoxes: number;
  computerBoxes: number;
  picked: number;
  played: boolean;
  winner: boolean;
  difficulty: string;
}

type BoxesGameAction =
  | {
      type: "setYouBoxes" | "setComputerBoxes" | "setPicked";
      value: number;
    }
  | {
      type: "setBoxes";
      value: React.ReactElement[];
    }
  | {
      type: "setPlayed" | "setWinner";
      value: boolean;
    }
  | {
      type: "setDifficulty";
      value: string;
    };

const initialBoxesGameState: BoxesGameState = {
  boxes: [],
  youBoxes: 0,
  computerBoxes: 0,
  picked: 0,
  played: false,
  winner: true,
  difficulty: "Hard",
};

function reducer(state: BoxesGameState, action: BoxesGameAction) {
  switch (action.type) {
    case "setYouBoxes":
      return {
        ...state,
        youBoxes: action.value,
      };
    case "setComputerBoxes":
      return {
        ...state,
        computerBoxes: action.value,
      };
    case "setBoxes":
      return {
        ...state,
        boxes: action.value,
      };
    case "setPicked":
      return {
        ...state,
        picked: action.value < 0 ? 0 : action.value > 3 ? 3 : action.value,
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
    case "setDifficulty":
      return {
        ...state,
        difficulty: action.value,
      };
  }
}

export const BoxesGameStateContext = React.createContext<BoxesGameState>(
  initialBoxesGameState
);

export const BoxesGameDispatchContext = React.createContext<
  React.Dispatch<BoxesGameAction>
>(() => null);

type BoxesGameStateProviderProps = { children: React.ReactNode };

export function BoxesGameStateProvider({
  children,
}: BoxesGameStateProviderProps) {
  const [BoxesGameState, dispatch] = React.useReducer(
    reducer,
    initialBoxesGameState
  );

  return (
    <BoxesGameStateContext.Provider value={BoxesGameState}>
      <BoxesGameDispatchContext.Provider value={dispatch}>
        {children}
      </BoxesGameDispatchContext.Provider>
    </BoxesGameStateContext.Provider>
  );
}

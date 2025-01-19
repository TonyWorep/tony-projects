"use client";

import React from "react";

interface F1TicTacToeState {
  grid: string[];
  gridDriver: string[];
  player: boolean;
  winner: boolean;
  winnerPlayer: string;
  open: boolean;
  card: number;
  categoriesRow: string[];
  categoriesColumn: string[];
  played: boolean;
}

type F1TicTacToeAction =
  | {
      type:
        | "setGrid"
        | "setGridDriver"
        | "setCategoriesRow"
        | "setCategoriesColumn";
      value: string[];
    }
  | {
      type: "setWinner" | "setOpen" | "setPlayer" | "setPlayed";
      value: boolean;
    }
  | {
      type: "setCard";
      value: number;
    }
  | {
      type: "setWinnerPlayer";
      value: string;
    };

const initialF1TicTacToeState: F1TicTacToeState = {
  grid: ["", "", "", "", "", "", "", "", ""],
  gridDriver: ["", "", "", "", "", "", "", "", ""],
  player: true,
  winner: false,
  open: false,
  card: 0,
  categoriesRow: ["", "", ""],
  categoriesColumn: ["", "", ""],
  played: false,
  winnerPlayer: "",
};

function reducer(state: F1TicTacToeState, action: F1TicTacToeAction) {
  switch (action.type) {
    case "setGrid":
      return {
        ...state,
        grid: action.value,
      };
    case "setGridDriver":
      return {
        ...state,
        gridDriver: action.value,
      };
    case "setPlayer":
      return {
        ...state,
        player: action.value,
      };
    case "setWinner":
      return {
        ...state,
        winner: action.value,
      };
    case "setOpen":
      return {
        ...state,
        open: action.value,
      };
    case "setCard":
      return {
        ...state,
        card: action.value,
      };
    case "setCategoriesRow":
      return {
        ...state,
        categoriesRow: action.value,
      };
    case "setCategoriesColumn":
      return {
        ...state,
        categoriesColumn: action.value,
      };
    case "setPlayed":
      return {
        ...state,
        played: action.value,
      };
    case "setWinnerPlayer":
      return {
        ...state,
        winnerPlayer: action.value,
      };
  }
}

export const F1TicTacToeStateContext = React.createContext<F1TicTacToeState>(
  initialF1TicTacToeState
);

export const F1TicTacToeDispatchContext = React.createContext<
  React.Dispatch<F1TicTacToeAction>
>(() => null);

type F1TicTacToeStateProviderProps = { children: React.ReactNode };

export function F1TicTacToeStateProvider({
  children,
}: F1TicTacToeStateProviderProps) {
  const [F1TicTacToeState, dispatch] = React.useReducer(
    reducer,
    initialF1TicTacToeState
  );

  return (
    <F1TicTacToeStateContext.Provider value={F1TicTacToeState}>
      <F1TicTacToeDispatchContext.Provider value={dispatch}>
        {children}
      </F1TicTacToeDispatchContext.Provider>
    </F1TicTacToeStateContext.Provider>
  );
}

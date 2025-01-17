"use client";

interface F1TicTacToeState {
  grid: string[];
  gridDriver: string[];
  player: boolean;
  winner: boolean;
}

type F1TicTacToeAction =
  | {
      type: "setGrid" | "setGridDriver";
      value: string[];
    }
  | {
      type: "setPlayer" | "setWinner";
      value: boolean;
    };

const initialF1TicTacToeState: F1TicTacToeState = {
  grid: ["", "", "", "", "", "", "", "", ""],
  gridDriver: ["", "", "", "", "", "", "", "", ""],
  player: true,
  winner: false,
};

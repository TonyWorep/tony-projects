"use client";

import F1TicTacToeGame from "./F1TicTacToeGame";

export default function F1TicTacToeApp() {
  return (
    <div className="flex flex-col gap-20 min-h-screen">
      <div className="flex flex-col ml-5 sm:ml-56">
        <h1 className="font-bold text-4xl">Formula 1 Tic Tac Toe</h1>
        <p className="opacity-75">
          Guess the drivers that fit in their respective categories. Get three
          in a row to win.
        </p>
      </div>
      <F1TicTacToeGame />
    </div>
  );
}

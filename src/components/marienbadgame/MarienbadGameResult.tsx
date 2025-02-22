"use client";

import React from "react";
import { Button } from "../ui/Button";
import {
  MarienbadGameDispatchContext,
  MarienbadGameStateContext,
} from "./MarienbadGameState";

export default function MarienbadGameResult() {
  const state = React.useContext(MarienbadGameStateContext);
  const dispatch = React.useContext(MarienbadGameDispatchContext);

  function resetGame() {
    dispatch({ type: "setPlatesAmount", value: [1, 3, 5, 7] });
    dispatch({ type: "setWinner", value: false });
    dispatch({ type: "setCol", value: 0 });
  }

  function checkWinner() {
    let message = "";

    if (state.winner) {
      message = "You win!";
    } else {
      message = "Computer win!";
    }

    return message;
  }

  return (
    <div
      className={
        state.platesAmount.reduce((x, y) => x + y) === 0
          ? "flex flex-col gap-2 items-center"
          : "hidden"
      }
    >
      <h1 className="text-center font-bold text-3xl">
        {state.platesAmount.reduce((x, y) => x + y) === 0 ? checkWinner() : ""}
      </h1>
      <Button variant={"destructive"} onClick={() => resetGame()}>
        Try again
      </Button>
    </div>
  );
}

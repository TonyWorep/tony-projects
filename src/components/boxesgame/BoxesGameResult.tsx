import React from "react";
import { Button } from "../ui/Button";
import {
  BoxesGameDispatchContext,
  BoxesGameStateContext,
} from "./BoxesGameState";

export default function BoxesGameResult() {
  const state = React.useContext(BoxesGameStateContext);
  const dispatch = React.useContext(BoxesGameDispatchContext);

  function resetGame() {
    dispatch({ type: "setYouBoxes", value: 0 });
    dispatch({ type: "setComputerBoxes", value: 0 });
    dispatch({ type: "setPlayed", value: !state.played });
    dispatch({ type: "setWinner", value: true });
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
        state.boxes.length === 0 ? "flex flex-col gap-2 items-center" : "hidden"
      }
    >
      <h1 className="text-center font-bold text-3xl">
        {state.boxes.length === 0 ? checkWinner() : ""}
      </h1>
      <Button variant={"destructive"} onClick={() => resetGame()}>
        Try again
      </Button>
    </div>
  );
}

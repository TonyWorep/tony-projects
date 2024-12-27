import React from "react";
import { Button } from "../ui/Button";
import {
  NumberGameDispatchContext,
  NumberGameStateContext,
} from "./NumberGameState";

export default function NumberGameResult() {
  const state = React.useContext(NumberGameStateContext);
  const dispatch = React.useContext(NumberGameDispatchContext);

  function resetGame() {
    dispatch({ type: "setSum", value: 0 });
    dispatch({ type: "setYouVisual", value: 0 });
  }

  function checkWinner() {
    let message = "";

    if (state.computer === 0) {
      message = "You win!";
    } else {
      message = "Computer Win!";
    }

    return message;
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="font-bold text-2xl text-center">
        {state.sum === 100 ? checkWinner() : ""}
      </h1>
      <Button variant={"destructive"} onClick={() => resetGame()}>
        Try again
      </Button>
    </div>
  );
}

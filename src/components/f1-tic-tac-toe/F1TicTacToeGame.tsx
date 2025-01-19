import { createCategories } from "@/lib/f1-tic-tac-toe/f1Categories";
import { checkGrid } from "@/lib/f1-tic-tac-toe/f1Logic";
import React from "react";
import { Button } from "../ui/Button";
import F1TicTacToeGrid from "./F1TicTacToeGrid";
import {
  F1TicTacToeDispatchContext,
  F1TicTacToeStateContext,
} from "./F1TicTacToeState";

export default function F1TicTacToeGame() {
  const state = React.useContext(F1TicTacToeStateContext);
  const dispatch = React.useContext(F1TicTacToeDispatchContext);

  React.useEffect(() => {
    const createdCategories = createCategories();
    dispatch({ type: "setCategoriesRow", value: createdCategories[0] });
    dispatch({ type: "setCategoriesColumn", value: createdCategories[1] });
  }, [state.played]);

  React.useEffect(() => {
    const winner = checkGrid(state.grid);
    if (winner === "X") {
      dispatch({ type: "setWinnerPlayer", value: "X" });
      dispatch({ type: "setWinner", value: true });
    }
    if (winner === "O") {
      dispatch({ type: "setWinnerPlayer", value: "O" });
      dispatch({ type: "setWinner", value: true });
    }
  }, [state.player]);

  function checkWinner() {
    let message = "";

    if (state.winnerPlayer === "X") {
      message = "X win!";
    } else if (state.winnerPlayer === "O") {
      message = "O win!";
    } else {
      message = "";
    }

    return message;
  }

  function resetGame() {
    const emptyGrid = ["", "", "", "", "", "", "", "", ""];

    dispatch({ type: "setGrid", value: emptyGrid });
    dispatch({ type: "setGridDriver", value: emptyGrid });
    dispatch({ type: "setWinnerPlayer", value: "" });
    dispatch({ type: "setWinner", value: false });
    dispatch({ type: "setPlayed", value: !state.played });
  }
  return (
    <div className="mx-auto">
      <p
        className={
          state.player
            ? "mb-5 text-xl font-semibold w-28 text-center bg-foreground text-background rounded-sm"
            : "mb-5 text-xl font-semibold w-28 text-center bg-destructive rounded-sm"
        }
      >
        {state.player ? "X" : "O"}&apos;s TURN
      </p>
      <div className="grid grid-cols-4 w-[540px] text-center mb-2">
        <p></p>
        {state.categoriesRow.map((category, i) => (
          <h1 className="text-xl font-bold" key={i}>
            {category}
          </h1>
        ))}
      </div>
      <div className="flex mb-10">
        <div className="grid grid-cols-1 w-36 text-center items-center text-xl font-bold">
          {state.categoriesColumn.map((category, i) => (
            <h1 key={i}>{category}</h1>
          ))}
        </div>
        <F1TicTacToeGrid />
      </div>
      <div
        className={state.winner ? "flex flex-col gap-2 items-center" : "hidden"}
      >
        <h1 className="text-center font-bold text-3xl">{checkWinner()}</h1>
        <Button variant={"destructive"} onClick={() => resetGame()}>
          Play again
        </Button>
      </div>
    </div>
  );
}

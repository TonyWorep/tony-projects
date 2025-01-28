import { categoriesToolTip } from "@/lib/f1-tic-tac-toe/f1";
import { createCategories } from "@/lib/f1-tic-tac-toe/f1Categories";
import { checkGrid } from "@/lib/f1-tic-tac-toe/f1Logic";
import React from "react";
import { Button } from "../ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/Tooltip";
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
    if (winner === "Draw") {
      dispatch({ type: "setWinner", value: true });
      dispatch({ type: "setWinnerPlayer", value: "Draw" });
    }
  }, [state.player]);

  function checkWinner() {
    let message = "";

    if (state.winnerPlayer === "X") {
      message = "X win!";
    } else if (state.winnerPlayer === "O") {
      message = "O win!";
    } else if (state.winnerPlayer === "Draw") {
      message = "Draw.";
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
      <div className="flex gap-10 sm:gap-36">
        <p
          className={
            state.player
              ? "mb-5 text-xl font-semibold w-28 h-8 text-center bg-foreground text-background rounded-sm border-b-4 border-muted-foreground"
              : "mb-5 text-xl font-semibold w-28 h-8 text-center bg-destructive rounded-sm border-b-4 border-red-950"
          }
        >
          {state.player ? "X" : "O"}&apos;s TURN
        </p>
        <div
          className={
            state.winner ? "flex flex-col gap-2 items-center mb-10" : "hidden"
          }
        >
          <h1 className="text-center font-bold text-3xl">{checkWinner()}</h1>
          <Button variant={"destructive"} onClick={() => resetGame()}>
            Play again
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 text-center mb-2 sm:w-[540px] ">
        <p></p>
        {state.categoriesRow.map((category, i) => (
          <Tooltip>
            <TooltipTrigger>
              <h1 className="text-sm font-bold sm:text-xl" key={i}>
                {category}
              </h1>
            </TooltipTrigger>
            <TooltipContent>
              <p>{categoriesToolTip[state.categoriesRow[i]]}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="flex mb-10">
        <div className="grid grid-cols-1 text-center items-center w-20 sm:w-36">
          {state.categoriesColumn.map((category, i) => (
            <Tooltip>
              <TooltipTrigger>
                <h1 className="text-sm font-bold sm:text-xl" key={i}>
                  {category}
                </h1>
              </TooltipTrigger>
              <TooltipContent>
                <p>{categoriesToolTip[state.categoriesColumn[i]]}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <F1TicTacToeGrid />
      </div>
    </div>
  );
}

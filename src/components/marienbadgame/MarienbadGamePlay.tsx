"use client";

import { MarienbadGameComputerMove } from "@/lib/marienbadgame/MarienbadGame";
import React from "react";
import { Button } from "../ui/Button";
import {
  MarienbadGameDispatchContext,
  MarienbadGameStateContext,
} from "./MarienbadGameState";

export function MarienbadGamePlay() {
  const state = React.useContext(MarienbadGameStateContext);
  const dispatch = React.useContext(MarienbadGameDispatchContext);

  React.useEffect(() => {
    const plates: Array<React.ReactElement[]> = [];

    for (let i = 0; i < 4; i++) {
      const buttons = [];
      for (let v = 0; v < state.platesAmount[i]; v++) {
        buttons.push(
          <Button
            key={`${i}-${v}`}
            disabled
            className="disabled:opacity-100 w-14 sm:w-24"
          ></Button>
        );
      }
      plates.push(buttons);
    }
    dispatch({ type: "setPlates", value: plates });
  }, [state.platesAmount]);

  function removePlate(i: number) {
    const platesAmount = [...state.platesAmount];

    if (platesAmount[i - 1] !== 0 && (state.col === 0 || state.col === i)) {
      platesAmount[i - 1] -= 1;

      if (state.col === 0) {
        dispatch({ type: "setCol", value: i });
      }

      dispatch({ type: "setPlatesAmount", value: platesAmount });
    }
  }

  return (
    <div
      className={
        state.platesAmount.reduce((x, y) => x + y) === 0
          ? "flex mt-20 sm:gap-10"
          : "flex place-items-end h-96 gap-1 sm:gap-10"
      }
    >
      {state.platesAmount.map((_, i) => (
        <div key={i} className="flex flex-col gap-5">
          <div className="grid grid-rows-1 gap-1 w-16 sm:w-24">
            {state.plates[i]}
          </div>
          <Button
            variant={"destructive"}
            className="w-14 sm:mx-auto"
            onClick={() => removePlate(i + 1)}
          >
            {`Col ${i + 1}`}
          </Button>
        </div>
      ))}
      <Button
        className="mt-5 w-12 sm:w-full"
        disabled={
          state.platesAmount.reduce((x, y) => x + y) === 0 ? true : false
        }
        onClick={() => {
          const platesAmount = [...state.platesAmount];
          const [col, amount] = MarienbadGameComputerMove(platesAmount);

          if (state.col !== 0 || platesAmount.reduce((x, y) => x + y) === 16) {
            platesAmount[col] -= amount;
            dispatch({ type: "setPlatesAmount", value: platesAmount });
            dispatch({ type: "setCol", value: 0 });
          }

          if (platesAmount.reduce((x, y) => x + y) === 0) {
            dispatch({ type: "setWinner", value: true });
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
}

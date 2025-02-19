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
            className="disabled:opacity-100"
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
    }

    if (state.col === 0) {
      dispatch({ type: "setCol", value: i });
    }

    dispatch({ type: "setPlatesAmount", value: platesAmount });
    console.log(state.col);
  }

  return (
    <div className="flex gap-10 place-items-end h-96">
      <div className="flex flex-col gap-5">
        <div className="grid grid-rows-1 w-24">{state.plates[0]}</div>
        <Button
          variant={"destructive"}
          className="w-14 mx-auto"
          onClick={() => removePlate(1)}
        >
          Col 1
        </Button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-rows-1 gap-1 w-24">{state.plates[1]}</div>
        <Button
          variant={"destructive"}
          className="w-14 mx-auto"
          onClick={() => removePlate(2)}
        >
          Col 2
        </Button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-rows-1 gap-1 w-24">{state.plates[2]}</div>
        <Button
          variant={"destructive"}
          className="w-14 mx-auto"
          onClick={() => removePlate(3)}
        >
          Col 3
        </Button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-rows-1 gap-1 w-24">{state.plates[3]}</div>
        <Button
          variant={"destructive"}
          className="w-14 mx-auto"
          onClick={() => removePlate(4)}
        >
          Col 4
        </Button>
      </div>
      <Button
        onClick={() => {
          const platesAmount = [...state.platesAmount];
          const computerMove: number[] = MarienbadGameComputerMove(
            platesAmount,
            state.col
          )!;
        }}
      >
        Submit
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { numberGameComputerMove } from "@/lib/numbergame/NumberGame";
import React from "react";
import {
  NumberGameDispatchContext,
  NumberGameStateContext,
} from "./NumberGameState";

export default function NumberGameYouCard() {
  const state = React.useContext(NumberGameStateContext);
  const dispatch = React.useContext(NumberGameDispatchContext);

  return (
    <Card className="w-72 sm:w-96">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>You</CardTitle>
        <CardDescription>Choose a number between 1-10.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-5">
        <p className="text-3xl font-semibold">{state.youVisual}</p>
        <div className="flex gap-2">
          <Input
            type="number"
            min={1}
            max={10}
            className="w-36 text-center"
            value={state.you}
            onChange={(e) => {
              dispatch({ type: "setYou", value: Number(e.target.value) });
            }}
            onClick={(e) => {
              if (e.currentTarget.value === "1") {
                e.currentTarget.value = "";
              }
            }}
          />
          <Button
            onClick={() => {
              const randomNumber = Math.floor(Math.random() * 10) + 1;
              dispatch({ type: "setYouVisual", value: state.you });
              dispatch({ type: "setYou", value: 1 });
              dispatch({
                type: "setComputer",
                value: numberGameComputerMove(
                  state.you,
                  state.sum,
                  randomNumber,
                  state.difficulty
                ),
              });
              dispatch({
                type: "setSum",
                value:
                  state.sum +
                  state.you +
                  numberGameComputerMove(
                    state.you,
                    state.sum,
                    randomNumber,
                    state.difficulty
                  ),
              });
            }}
            disabled={state.sum === 100 ? true : false}
          >
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

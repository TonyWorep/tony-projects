import { boxesGameComputerMove } from "@/lib/boxesgame/BoxesGame";
import React from "react";
import { Button } from "../ui/Button";
import {
  BoxesGameDispatchContext,
  BoxesGameStateContext,
} from "./BoxesGameState";

export default function BoxesGamePlay() {
  const state = React.useContext(BoxesGameStateContext);
  const dispatch = React.useContext(BoxesGameDispatchContext);

  let boxesClicked: boolean[] = [];
  let boxes: React.ReactElement[] = [];

  let picked: number = 0;

  React.useEffect(() => {
    for (let i = 0; i < 20; i++) {
      boxesClicked.push(true);
    }
    placeBoxes(20);
  }, [state.played]);

  function placeBoxes(amount: number) {
    boxes.length = 0;
    for (let i = 0; i < amount; i++) {
      boxes.push(
        <Button
          onClick={() => {
            if (picked < 3) {
              if (boxesClicked[i]) {
                picked += 1;
                dispatch({ type: "setPicked", value: picked });
                boxesClicked[i] = false;
              } else {
                picked -= 1;
                dispatch({ type: "setPicked", value: picked });
                boxesClicked[i] = true;
              }
            } else {
              if (!boxesClicked[i]) {
                picked -= 1;
                dispatch({ type: "setPicked", value: picked });
                boxesClicked[i] = true;
              }
            }
            placeBoxes(amount);
          }}
          key={i}
          className={boxesClicked[i] ? "opacity-100" : "opacity-50"}
        ></Button>
      );
    }
    dispatch({ type: "setBoxes", value: boxes });
  }

  function takeBoxes(computer: number) {
    dispatch({ type: "setPicked", value: 0 });
    picked = 0;

    boxesClicked.length = 0;
    for (let i = 0; i < state.boxes.length - state.picked - computer; i++) {
      boxesClicked.push(true);
    }

    if (boxesClicked.length === 1) {
      dispatch({ type: "setWinner", value: false });
    }

    placeBoxes(boxesClicked.length);
  }

  return (
    <div className="flex flex-col gap-5 h-80">
      <div className="grid grid-cols-4 gap-2">{state.boxes}</div>
      <Button
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * 3) + 1;

          state.boxes.length === 0 || state.picked === 0
            ? false
            : (takeBoxes(
                boxesGameComputerMove(
                  state.boxes.length - state.picked,
                  randomNumber
                )
              ),
              dispatch({
                type: "setYouBoxes",
                value: state.youBoxes + state.picked,
              }),
              dispatch({
                type: "setComputerBoxes",
                value:
                  state.computerBoxes +
                  boxesGameComputerMove(
                    state.boxes.length - state.picked,
                    randomNumber
                  ),
              }));
        }}
        disabled={state.boxes.length === 0 ? true : false}
        className="mt-auto mx-auto w-40"
      >
        Submit
      </Button>
    </div>
  );
}

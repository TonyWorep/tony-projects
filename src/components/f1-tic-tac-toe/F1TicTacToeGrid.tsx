import { lastUpdated } from "@/lib/f1-tic-tac-toe/f1";
import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import F1TicTacToeDriverSearch from "./F1TicTacToeDriverSearch";
import {
  F1TicTacToeDispatchContext,
  F1TicTacToeStateContext,
} from "./F1TicTacToeState";

export default function F1TicTacToeGrid() {
  const state = React.useContext(F1TicTacToeStateContext);
  const dispatch = React.useContext(F1TicTacToeDispatchContext);

  let cards: React.ReactElement[] = [];

  for (let i = 0; i < 9; i++) {
    cards.push(
      <Card key={i} className="h-32 w-32">
        <Dialog open={state.open}>
          <DialogTrigger asChild>
            <Button
              variant={"secondary"}
              className="w-full h-full bg-background disabled:opacity-100"
              disabled={state.grid[i].length > 0 || state.winner}
              onClick={() => {
                dispatch({ type: "setOpen", value: true });
                dispatch({ type: "setCard", value: i });
              }}
            >
              <div className="flex flex-col">
                <h1
                  className={
                    state.grid[i] === "X"
                      ? "text-7xl"
                      : "text-7xl text-destructive"
                  }
                >
                  {state.grid[i]}
                </h1>
                <p>{state.gridDriver[i]}</p>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent
            onEscapeKeyDown={() => dispatch({ type: "setOpen", value: false })}
            onPointerDownOutside={() =>
              dispatch({ type: "setOpen", value: false })
            }
          >
            <DialogHeader>
              <DialogTitle>Driver Search</DialogTitle>
              <DialogDescription>
                Find a past or present driver that fits in the two categories.
              </DialogDescription>
            </DialogHeader>
            <F1TicTacToeDriverSearch />
            <DialogFooter>Last updated: {lastUpdated}</DialogFooter>
          </DialogContent>
        </Dialog>
      </Card>
    );
  }

  return <div className="grid grid-cols-3 gap-1">{cards}</div>;
}

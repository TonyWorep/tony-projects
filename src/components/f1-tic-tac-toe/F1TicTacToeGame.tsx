import { worldChampions } from "@/lib/f1-tic-tac-toe/f1";
import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Command, CommandInput, CommandItem, CommandList } from "../ui/Command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";

export default function F1TicTacToeGame() {
  const [input, setInput] = React.useState("");

  function makeCard() {
    let cards = [];

    for (let i = 0; i < 9; i++) {
      cards.push(
        <Card className="h-32 w-32">
          <Dialog onOpenChange={(v) => (v ? setInput("") : false)}>
            <DialogTrigger asChild>
              <Button
                variant={"secondary"}
                className="w-full h-full bg-background"
              ></Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Driver Search</DialogTitle>
                <DialogDescription>
                  Find a past or present driver that fits in the two categories.
                </DialogDescription>
              </DialogHeader>
              <Command>
                <CommandInput
                  placeholder="Search Driver..."
                  onValueChange={(i) => setInput(i)}
                />
                <CommandList hidden={input.length > 1 ? false : true}>
                  {worldChampions.map((driver) => (
                    <CommandItem>{driver}</CommandItem>
                  ))}
                </CommandList>
              </Command>
              <DialogFooter>Last updated 17.01.2025</DialogFooter>
            </DialogContent>
          </Dialog>
        </Card>
      );
    }
    return cards;
  }

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-4 w-[540px] text-center mb-2 text-xl font-bold">
        <h1></h1>
        <h1>Redbull</h1>
        <h1>Ferrari</h1>
        <h1>Mercedes</h1>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 w-36 text-center items-center text-xl font-bold">
          <h1>Home GP Winners</h1>
          <h1>World Champions</h1>
          <h1>Winners without Titles</h1>
        </div>
        <div className="grid grid-cols-3 gap-1">{makeCard()}</div>
      </div>
    </div>
  );
}

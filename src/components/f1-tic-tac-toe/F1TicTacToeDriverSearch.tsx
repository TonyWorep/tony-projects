import { useToast } from "@/hooks/use-toast";
import { categories, drivers } from "@/lib/f1-tic-tac-toe/f1";
import React from "react";
import { Command, CommandInput, CommandItem, CommandList } from "../ui/Command";
import {
  F1TicTacToeDispatchContext,
  F1TicTacToeStateContext,
} from "./F1TicTacToeState";

export default function F1TicTacToeDriverSearch() {
  const state = React.useContext(F1TicTacToeStateContext);
  const dispatch = React.useContext(F1TicTacToeDispatchContext);
  const [input, setInput] = React.useState("");
  const { toast } = useToast();

  function pickDriver(driver: string) {
    const grid = [...state.grid];
    const drivers = [...state.gridDriver];
    const position = state.position;
    const displayDriver = driver.split(" ");
    const driverShortHands = [];

    if (
      categories[state.categoriesRow[position[0]]].includes(driver) &&
      categories[state.categoriesColumn[position[1]]].includes(driver)
    ) {
      grid[state.card] = state.player ? "X" : "O";

      for (let i = 0; i < displayDriver.length - 1; i++) {
        if (displayDriver[i] !== displayDriver[i].toLowerCase()) {
          driverShortHands.push(`${displayDriver[i][0]}.`);
        } else {
          driverShortHands.push(displayDriver[i]);
        }
      }

      const displayShortHands = driverShortHands.join(" ");
      drivers[state.card] = `${displayShortHands} ${
        displayDriver[displayDriver.length - 1]
      }`;

      dispatch({ type: "setGrid", value: grid });
      dispatch({ type: "setGridDriver", value: drivers });
      dispatch({ type: "setPlayer", value: !state.player });
      dispatch({ type: "setOpen", value: false });
    } else {
      dispatch({ type: "setOpen", value: false });
      dispatch({ type: "setPlayer", value: !state.player });
      toast({
        variant: "destructive",
        title: "Incorrect driver selected.",
      });
    }
  }

  return (
    <Command loop>
      <CommandInput
        placeholder="Search Driver..."
        onValueChange={(d) => setInput(d)}
      />
      <CommandList hidden={input.length > 1 ? false : true}>
        {drivers.map((driver, v) => (
          <CommandItem key={v} onSelect={() => pickDriver(driver)}>
            <p
              className="w-full h-full"
              onClick={() => {
                pickDriver(driver);
              }}
            >
              {driver}
            </p>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}

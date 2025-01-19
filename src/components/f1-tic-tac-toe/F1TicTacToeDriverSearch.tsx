import { useToast } from "@/hooks/use-toast";
import { categories, drivers } from "@/lib/f1-tic-tac-toe/f1";
import { getPosition } from "@/lib/f1-tic-tac-toe/f1Logic";
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
    const position = getPosition(state.card);
    const displayDriver = driver.split(" ");

    if (
      categories[state.categoriesRow[position[0]]].includes(driver) &&
      categories[state.categoriesColumn[position[1]]].includes(driver)
    ) {
      grid[state.card] = state.player ? "X" : "O";
      drivers[state.card] = `${displayDriver[0][0]}. ${displayDriver[1]}`;

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
    <Command>
      <CommandInput
        placeholder="Search Driver..."
        onValueChange={(d) => setInput(d)}
      />
      <CommandList hidden={input.length > 1 ? false : true}>
        {drivers.map((driver, v) => (
          <CommandItem key={v}>
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

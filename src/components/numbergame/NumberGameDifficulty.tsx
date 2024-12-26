import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import {
  NumberGameDispatchContext,
  NumberGameStateContext,
} from "./NumberGameState";

export default function NumberGameDifficulty() {
  const state = React.useContext(NumberGameStateContext);
  const dispatch = React.useContext(NumberGameDispatchContext);

  return (
    <Select
      value={state.difficulty}
      onValueChange={(diff) => {
        dispatch({ type: "setDifficulty", value: diff });
        dispatch({ type: "setSum", value: 0 });
        dispatch({ type: "setYouVisual", value: 0 });
        dispatch({ type: "setComputer", value: 0 });
      }}
      defaultValue={state.difficulty}
    >
      <SelectTrigger className="w-20">
        <SelectValue></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Easy">Easy</SelectItem>
        <SelectItem value="Hard">Hard</SelectItem>
      </SelectContent>
    </Select>
  );
}

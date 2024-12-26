import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import {
  BoxesGameDispatchContext,
  BoxesGameStateContext,
} from "./BoxesGameState";

export default function BoxesGameDifficulty() {
  const state = React.useContext(BoxesGameStateContext);
  const dispatch = React.useContext(BoxesGameDispatchContext);

  return (
    <Select
      value={state.difficulty}
      onValueChange={(diff) => {
        dispatch({ type: "setDifficulty", value: diff });
        dispatch({ type: "setPlayed", value: !state.played });
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

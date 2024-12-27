import React from "react";
import { Button } from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { BoxesGameStateContext } from "./BoxesGameState";

export default function BoxesGameYouCard() {
  const state = React.useContext(BoxesGameStateContext);
  const boxes = [];

  for (let i = 0; i < state.youBoxes; i++) {
    boxes.push(<Button key={i}></Button>);
  }

  return (
    <Card className="w-72 sm:w-96">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>You</CardTitle>
        <CardDescription>Choose 1, 2 or 3 boxes.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-6 gap-2 mx-auto sm:grid-cols-9">
        {boxes}
      </CardContent>
    </Card>
  );
}

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

export default function BoxesGameComputerCard() {
  const state = React.useContext(BoxesGameStateContext);
  const boxes = [];

  for (let i = 0; i < state.computerBoxes; i++) {
    boxes.push(<Button key={i}></Button>);
  }

  return (
    <Card className="w-72 sm:w-96">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>Computer</CardTitle>
        <CardDescription>
          The computer will respond after you have picked the amount of boxes.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-6 gap-2 mx-auto sm:grid-cols-9">
        {boxes}
      </CardContent>
    </Card>
  );
}

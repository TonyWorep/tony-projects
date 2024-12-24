import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import React from "react";
import { NumberGameStateContext } from "./NumberGameState";

export default function NumberGameComputerCard() {
  const state = React.useContext(NumberGameStateContext);

  return (
    <Card className="w-96">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>Computer</CardTitle>
        <CardDescription>
          The computer will respond when you have made your move.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <p className="text-3xl font-semibold">{state.computer}</p>
      </CardContent>
    </Card>
  );
}

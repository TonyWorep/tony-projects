"use client";

import React from "react";
import { Card, CardContent } from "../ui/Card";
import { MarienbadGameStateContext } from "./MarienbadGameState";

export default function MarienbadGameInfo() {
  const state = React.useContext(MarienbadGameStateContext);

  return (
    <Card
      className={
        state.platesAmount.reduce((x, y) => x + y) === 16
          ? "mt-5 w-80 sm:w-full"
          : "hidden"
      }
    >
      <CardContent className="px-auto pt-5">
        <p>Remove any amount of plates, but only from one column.</p>
        <p>
          At the start of the game, you can let the computer start by clicking
          Submit.
        </p>
      </CardContent>
    </Card>
  );
}

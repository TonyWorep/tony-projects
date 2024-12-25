"use client";

import React from "react";
import BoxesGameComputerCard from "./BoxesGameComputerCard";

import BoxesGamePlay from "./BoxesGamePlay";
import BoxesGameResult from "./BoxesGameResult";
import { BoxesGameStateContext } from "./BoxesGameState";
import BoxesGameYouCard from "./BoxesGameYouCard";

export default function BoxesGame() {
  const state = React.useContext(BoxesGameStateContext);

  return (
    <div className="flex flex-col gap-20 mx-auto min-h-screen">
      <div>
        <h1 className="font-bold text-4xl">Boxes Game</h1>
        <p className="opacity-75">Last to pick the box loses.</p>
      </div>
      <div className="flex gap-20">
        <BoxesGameYouCard />
        <BoxesGamePlay />
        <BoxesGameComputerCard />
      </div>
      {state.boxes.length === 0 ? <BoxesGameResult /> : false}
    </div>
  );
}

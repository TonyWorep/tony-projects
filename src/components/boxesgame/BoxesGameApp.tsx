"use client";

import React from "react";
import BoxesGameComputerCard from "./BoxesGameComputerCard";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import BoxesGameDifficulty from "./BoxesGameDifficulty";
import BoxesGamePlay from "./BoxesGamePlay";
import BoxesGameResult from "./BoxesGameResult";
import { BoxesGameStateContext } from "./BoxesGameState";
import BoxesGameYouCard from "./BoxesGameYouCard";

export default function BoxesGame() {
  const state = React.useContext(BoxesGameStateContext);

  return (
    <div className="flex flex-col gap-20 min-h-screen">
      <div className="flex flex-col ml-5 sm:ml-56">
        <h1 className="font-bold text-4xl">Boxes Game</h1>
        <p className="opacity-75">Last to pick the box loses.</p>
      </div>
      <div className="flex flex-col mx-auto gap-2">
        <BoxesGameDifficulty />
        <div className="flex flex-col gap-5 lg:flex-row sm:gap-16">
          <BoxesGameYouCard />
          <BoxesGamePlay />
          <BoxesGameResult />
          <BoxesGameComputerCard />
        </div>
      </div>
      <div className="flex flex-col mt-auto mb-auto w-full">
        <Accordion
          type="single"
          collapsible
          className="w-72 sm:w-[600px] mx-auto"
        >
          <AccordionItem value="1">
            <AccordionTrigger>
              Why does the computer always win?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The computer always win because the boxes are apart of an
                arithmetic series separated by 4. The way the boxes are set up
                gives you a little hint. Can you spot it?
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

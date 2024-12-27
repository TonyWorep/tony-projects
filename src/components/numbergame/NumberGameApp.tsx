"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import NumberGameComputerCard from "./NumberGameComputer";
import NumberGameDifficulty from "./NumberGameDifficulty";
import NumberGameResult from "./NumberGameResult";
import { NumberGameStateContext } from "./NumberGameState";
import NumberGameYouCard from "./NumberGameYou";

export default function NumberGame() {
  const state = React.useContext(NumberGameStateContext);

  return (
    <div className="flex flex-col gap-20 min-h-screen">
      <div className="flex flex-col ml-5 sm:ml-56">
        <h1 className="font-bold text-4xl">Number Game</h1>
        <p className="opacity-75">First to reach 100 wins.</p>
      </div>
      <div className="flex flex-col mx-auto gap-2">
        <NumberGameDifficulty />
        <div className="flex flex-col gap-5 lg:flex-row sm:justify-center mx-auto sm:gap-16">
          <NumberGameYouCard />

          {state.sum === 100 ? (
            <NumberGameResult />
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl">Sum</h1>
              <p className="font-semi text-xl">{state.sum}</p>
            </div>
          )}

          <NumberGameComputerCard />
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
              Why does the cormputer always win?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The computer always win because the sum is apart of an
                arithmetic series separated by 11. The goal for the computer is
                to make sure that you land in that arithmetic series. Can you
                spot the series?
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import NumberGameComputerCard from "./NumberGameComputer";
import NumberGameResult from "./NumberGameResult";
import { NumberGameStateContext } from "./NumberGameState";
import NumberGameYouCard from "./NumberGameYou";

export default function NumberGame() {
  const state = React.useContext(NumberGameStateContext);

  return (
    <div className="flex flex-col gap-20 mx-auto min-h-screen">
      <div>
        <h1 className="font-bold text-4xl">Number Game</h1>
        <p className="opacity-75">First to reach 100 wins.</p>
      </div>
      <div className="flex gap-20">
        <NumberGameYouCard />
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl">Sum</h1>
          <p className="font-semi text-xl">{state.sum}</p>
        </div>
        <NumberGameComputerCard />
      </div>
      {state.sum === 100 ? <NumberGameResult /> : false}
      <div className="flex flex-col mt-auto mb-auto w-full">
        <Accordion type="single" collapsible className="w-[600px] mx-auto">
          <AccordionItem value="1">
            <AccordionTrigger>
              Why does the computer always win?
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

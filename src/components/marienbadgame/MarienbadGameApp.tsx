import MarienbadGameAccordion from "./MarienbadGameAccordion";
import MarienbadGameInfo from "./MarienbadGameInfo";
import { MarienbadGamePlay } from "./MarienbadGamePlay";
import MarienbadGameResult from "./MarienbadGameResult";

export default function MarienbadGame() {
  return (
    <div className="flex flex-col gap-20 min-h-screen">
      <div className="flex flex-col ml-5 sm:ml-56">
        <h1 className="font-bold text-4xl">Marienbad Game</h1>
        <p className="opacity-75">Last to pick the plate loses.</p>
      </div>
      <div className="mx-auto">
        <MarienbadGameResult />
        <MarienbadGamePlay />
        <MarienbadGameInfo />
        <MarienbadGameAccordion />
      </div>
    </div>
  );
}

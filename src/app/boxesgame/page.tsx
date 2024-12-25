import BoxesGame from "@/components/boxesgame/BoxesGameApp";
import { BoxesGameStateProvider } from "@/components/boxesgame/BoxesGameState";

export default function Page() {
  return (
    <BoxesGameStateProvider>
      <BoxesGame />
    </BoxesGameStateProvider>
  );
}

import MarienbadGame from "@/components/marienbadgame/MarienbadGameApp";
import { MarienbadGameStateProvider } from "@/components/marienbadgame/MarienbadGameState";

export default function Page() {
  return (
    <MarienbadGameStateProvider>
      <MarienbadGame />
    </MarienbadGameStateProvider>
  );
}

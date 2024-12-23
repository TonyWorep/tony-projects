import NumberGame from "@/components/numbergame/NumberGameApp";
import { NumberGameStateProvider } from "@/components/numbergame/NumberGameState";

export default function Page() {
  return (
    <NumberGameStateProvider>
      <NumberGame />
    </NumberGameStateProvider>
  );
}

import F1TicTacToeApp from "@/components/f1-tic-tac-toe/F1TicTacToeApp";
import { F1TicTacToeStateProvider } from "@/components/f1-tic-tac-toe/F1TicTacToeState";

export default function Page() {
  return (
    <F1TicTacToeStateProvider>
      <F1TicTacToeApp />
    </F1TicTacToeStateProvider>
  );
}

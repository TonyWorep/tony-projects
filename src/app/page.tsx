import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/numbergame">Click here for Number Game</Link>
      <Link href="/boxesgame">Click here for Boxes Game</Link>
      <Link href="/f1-tic-tac-toe">Click here for Formula 1 Tic Tac Toe</Link>
    </div>
  );
}

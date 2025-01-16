import { Card } from "../ui/Card";

export default function F1TicTacToeGame() {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-4 w-[530px] text-center mb-2 text-xl font-bold">
        <h1></h1>
        <h1>Home GP Winners</h1>
        <h1>World Champions</h1>
        <h1>Winners without Titles</h1>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 w-36 text-center items-center text-xl font-bold">
          <h1>Redbull</h1>
          <h1>Ferrari</h1>
          <h1>Mercedes</h1>
        </div>
        <div className="grid grid-cols-3">
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
          <Card className="h-32 w-32"></Card>
        </div>
      </div>
    </div>
  );
}

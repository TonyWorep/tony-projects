import { Button } from "../ui/Button";

export default function MarienbadGame() {
  return (
    <div className="flex flex-col gap-20 min-h-screen">
      <div className="flex flex-col ml-5 sm:ml-56">
        <h1 className="font-bold text-4xl">Marienbad Game</h1>
        <p className="opacity-75">Last to pick the plate loses.</p>
      </div>
      <div className="mx-auto">
        <div className="flex gap-10 place-items-end">
          <div className="flex flex-col gap-5">
            <div className="grid grid-rows-1 w-24">
              <Button disabled className="disabled:opacity-100"></Button>
            </div>
            <Button variant={"destructive"} className="w-14 mx-auto">
              Col 1
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-rows-1 gap-1 w-24">
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
            </div>
            <Button variant={"destructive"} className="w-14 mx-auto">
              Col 2
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-rows-1 gap-1 w-24">
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
            </div>
            <Button variant={"destructive"} className="w-14 mx-auto">
              Col 3
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-rows-1 gap-1 w-24">
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
              <Button disabled className="disabled:opacity-100"></Button>
            </div>
            <Button variant={"destructive"} className="w-14 mx-auto">
              Col 4
            </Button>
          </div>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}

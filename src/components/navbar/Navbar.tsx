import logo from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";

export default function Navbar() {
  return (
    <header className="flex h-8 my-5 w-[75%] mx-auto justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="flex gap-3 items-center">
          <Image src={logo} alt="logo" className="w-8" />
          <h1 className="font-bold">tony/projects</h1>
        </Link>
      </div>
      <ModeToggle />
    </header>
  );
}

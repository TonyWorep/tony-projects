import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

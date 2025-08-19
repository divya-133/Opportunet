// export function cn(...inputs: (string | undefined | null | false)[]): string {
//   return inputs.filter(Boolean).join(" ");
// }
// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// export function cn(...classes: (string | false | null | undefined)[]) {
//   return classes.filter(Boolean).join(" ");
// }


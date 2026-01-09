// utils/cn.ts

import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind + conditional classNames
 * Example:
 *   cn("px-4 py-2", isActive && "bg-blue-500")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
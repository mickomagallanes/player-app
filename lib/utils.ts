import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
export function toFixedNumber(num: number, precision: number) {
  return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
}

export function nullCatch(value: any) {
  return value === null ? "-" : value;
}

export function nullCatchArray(value: any) {
  return value === null ? [] : value;
}

export function capitalizeFirstLetter(value: string) {
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

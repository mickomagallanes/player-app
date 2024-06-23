"use client";
import React from "react";

export default function CardLoading() {
  return (
    <div className="flex animate-pulse flex-row gap-2 rounded-xl bg-white px-6 pt-2 align-middle hover:underline">
      <p className="my-auto flex h-5 flex-1 rounded-lg bg-neutral-500 align-middle"></p>
      <div className="mb-4 size-24 max-w-xs rounded-full bg-slate-200 sm:size-28"></div>
    </div>
  );
}

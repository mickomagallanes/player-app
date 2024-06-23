import React from "react";

export default function HeroSkeleton() {
  return (
    <>
      <div className="mb-6 flex animate-pulse flex-col items-center justify-center md:order-3 md:md:col-span-3 md:flex-row md:justify-normal md:text-left md:text-4xl">
        <h1 className="h-6 w-3/4 rounded-md bg-slate-200"></h1>
      </div>

      <div className="flex animate-pulse justify-center md:order-1 md:col-span-2 md:row-span-2">
        <div className="mb-4 size-48 max-w-xs rounded-full bg-slate-200 sm:size-56"></div>
      </div>
      <div className="bg-transparent md:order-2 md:col-span-1 md:row-span-2"></div>
      <div className="-mt-4 flex w-full animate-pulse flex-col gap-4 pb-2 pt-6 md:order-4 md:md:col-span-4 md:mt-0 md:pb-6 md:pt-0">
        <p className="mx-auto my-2 h-6 w-1/5 rounded-md bg-slate-200 text-center md:mx-0 md:mb-6 md:text-left md:text-xl"></p>
      </div>
    </>
  );
}

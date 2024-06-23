import CardLoading from "@/ui/card-loading";
import React from "react";

export default function Loading() {
  const createCardsSkeleton = () => {
    const gridArr = [];

    for (let i = 0; i < 16; i++) {
      gridArr.push(<CardLoading key={i} />);
    }

    return gridArr;
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="mt-12 text-center text-xl font-semibold md:text-2xl">
        Get stats of a player
      </h1>

      <div className="container mx-auto flex flex-col gap-4 p-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {createCardsSkeleton()}
      </div>
    </div>
  );
}

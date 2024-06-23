import React from "react";
import MainPage from "./main";
import { fetchAllPlayers } from "@/lib/actions";

export default async function Home() {
  const initialData = await fetchAllPlayers(0);

  return (
    <div className="flex flex-col justify-center pb-6">
      <h1 className="mt-12 text-center text-xl font-semibold md:text-2xl">
        Get stats of a player
      </h1>

      <MainPage initialData={initialData.data} />
    </div>
  );
}

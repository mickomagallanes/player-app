import React from "react";
import Hero from "./(ui)/hero";
import SeasonAverage from "./(ui)/season-average";

export default function Player({ params }: { params: { player: string } }) {
  return (
    <div className="flex flex-col">
      <div className="bg-[#212121] pt-2 text-[#E2E2E2]">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Lebron James
        </h1>
        <Hero />
        <SeasonAverage />
      </div>
    </div>
  );
}

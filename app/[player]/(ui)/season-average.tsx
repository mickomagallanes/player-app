import React from "react";

export default function SeasonAverage() {
  return (
    <div className="-mt-4 flex w-full flex-col bg-gradient-to-t from-black to-transparent to-90% pb-2 pt-6">
      <p className="mb-2 text-center">2023 Averages</p>
      <div className="flex flex-row">
        <SeasonCard title="PPG" value="23" />
        <SeasonCard title="RPG" value="23" />
        <SeasonCard title="APG" value="23" />
        <SeasonCard title="FG" value="23" />
      </div>
    </div>
  );
}

const SeasonCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex-1">
      <p className="text-center text-xs text-[#A2A2A2]">{title}</p>
      <p className="text-center">{value}</p>
    </div>
  );
};

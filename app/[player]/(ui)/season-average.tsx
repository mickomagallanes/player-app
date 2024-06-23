import React from "react";

export default function SeasonAverage({
  latestStats,
  seasonName,
}: {
  latestStats: SeasonStats;
  seasonName: string;
}) {
  return (
    <div className="-mt-4 flex w-full flex-col gap-4 pb-2 pt-6 md:order-4 md:md:col-span-4 md:mt-0 md:pb-6 md:pt-0">
      <p className="mb-2 text-center md:mb-6 md:text-left md:text-xl">
        {seasonName}
      </p>
      <div className="flex flex-row">
        <SeasonCard title="PPG" value={latestStats?.pointsPerGame} />
        <SeasonCard title="RPG" value={latestStats?.reboundsPerGame} />
        <SeasonCard title="APG" value={latestStats?.assistsPerGame} />
        <SeasonCard title="FGM" value={latestStats?.fieldGoalsMade} />
      </div>
    </div>
  );
}

const SeasonCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="flex-1">
      <p className="text-center text-xs text-[#A2A2A2] md:text-left md:text-sm">
        {title}
      </p>
      <p className="text-center md:text-left md:text-lg">
        {value ? value.toFixed(2) : "-"}
      </p>
    </div>
  );
};

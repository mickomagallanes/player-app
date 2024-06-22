import TableLoading from "@/ui/table-loading";
import React from "react";

const tableColumns = [
  { header: "Season", key: "id" },
  { header: "Team", key: "team" },
  {
    header: "PTS",
    key: "pointsPerGame",
  },
  {
    header: "FGM",
    key: "fieldGoalsMade",
  },
  {
    header: "FGA",
    key: "fieldGoalsAttempted",
  },
  {
    header: "FG%",
    key: "fieldGoalsPercentage",
  },
  {
    header: "FTM",
    key: "freeThrowsMadePerGame",
  },
  {
    header: "FTA",
    key: "freeThrowsAttemptedPerGame",
  },
  {
    header: "FT%",
    key: "freeThrowsPercentage",
  },
  {
    header: "BLK",
    key: "blocksPerGame",
  },
  {
    header: "STL",
    key: "stealsPerGame",
  },
  {
    header: "PF",
    key: "foulsPersonalPerGame",
  },
  {
    header: "REB",
    key: "reboundsPerGame",
  },
  {
    header: "AST",
    key: "assistsPerGame",
  },
];

export default function CareerSkeleton() {
  return (
    <>
      <p className="mb-1 mt-3 text-center text-lg">Career Stats</p>
      <div className="overflow-x-auto rounded-xl bg-white">
        <TableLoading columns={tableColumns} />
      </div>
    </>
  );
}

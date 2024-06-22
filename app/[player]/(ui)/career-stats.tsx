import { fetchCareerStats, fetchSeasonStats } from "@/lib/data";
import Table, { TableColumn } from "@/ui/table";

import React from "react";

const statsColumns: TableColumn[] = [
  { header: "Season", key: "id", cName: "sticky left-0 bg-white" },
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

// transform data to what I only need
const transformCareer = (data: CareerAPI[]): CareerTransformed[] => {
  return data.map((item) => ({
    id: "Career", // also used for keys in looping
    games: item.statistics.games,
    pointsPerGame: item.statistics.pointsPerGame,
    fieldGoalsMade: item.statistics.fieldGoalsMade,
    fieldGoalsAttempted: item.statistics.fieldGoalsAttempted,
    fieldGoalsPercentage: item.statistics.fieldGoalsPercentage,
    freeThrowsMadePerGame: item.statistics.freeThrowsMadePerGame,
    freeThrowsAttemptedPerGame: item.statistics.freeThrowsAttemptedPerGame,
    freeThrowsPercentage: item.statistics.freeThrowsPercentage,
    blocksPerGame: item.statistics.blocksPerGame,
    stealsPerGame: item.statistics.stealsPerGame,
    foulsPersonalPerGame: item.statistics.foulsPersonalPerGame,
    reboundsPerGame: item.statistics.reboundsPerGame,
    assistsPerGame: item.statistics.assistsPerGame,
  }));
};

// transform data to what I only need
const transformSeasons = (
  stats: SeasonAPI[],
  entities: SeasonEntities,
  seasons: SeasonInfos,
): SeasonTransformed[] => {
  return stats.map((item) => ({
    id: seasons[item.seasonId].nameLocal, // also used for keys in looping
    team: entities[`${item.organizationId}:${item.entityId}`].nameFullLocal,
    games: item.statistics.games,
    pointsPerGame: item.statistics.pointsPerGame,
    fieldGoalsMade: item.statistics.fieldGoalsMade,
    fieldGoalsAttempted: item.statistics.fieldGoalsAttempted,
    fieldGoalsPercentage: item.statistics.fieldGoalsPercentage,
    freeThrowsMadePerGame: item.statistics.freeThrowsMadePerGame,
    freeThrowsAttemptedPerGame: item.statistics.freeThrowsAttemptedPerGame,
    freeThrowsPercentage: item.statistics.freeThrowsPercentage,
    blocksPerGame: item.statistics.blocksPerGame,
    stealsPerGame: item.statistics.stealsPerGame,
    foulsPersonalPerGame: item.statistics.foulsPersonalPerGame,
    reboundsPerGame: item.statistics.reboundsPerGame,
    assistsPerGame: item.statistics.assistsPerGame,
  }));
};

export default async function CareerStats({ playerId }: { playerId: string }) {
  const careerStats = await fetchCareerStats(playerId);
  const seasonStats = await fetchSeasonStats(playerId);

  if (careerStats.data === undefined || seasonStats.data === undefined) {
    throw new Error("Player not found");
  }

  // merge career and seasons data for table, career at the bottom
  const tblData = [
    ...transformSeasons(
      seasonStats.data.reverse(), // reverse the array to show the latest at the top row
      seasonStats.includes.resources.entities,
      seasonStats.includes.resources.seasons,
    ),
    ...transformCareer(careerStats.data),
  ];

  return (
    <>
      <p className="mb-1 mt-3 text-center text-lg">Career Stats</p>
      <div className="overflow-x-auto rounded-xl bg-white">
        <Table columns={statsColumns} data={tblData} />
      </div>
    </>
  );
}

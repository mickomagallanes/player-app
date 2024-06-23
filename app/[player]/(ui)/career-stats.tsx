import { fetchCareerStats, fetchSeasonStats } from "@/lib/data";
import { nullCatchArray, toFixedNumber } from "@/lib/utils";
import Table, { TableColumn } from "@/ui/table";

import React from "react";

const statsColumns: TableColumn[] = [
  { header: "Season", key: "id", cName: "sticky left-0 bg-white" },
  { header: "Team", key: "team" },
  { header: "GP", key: "games", title: "Games Played" },
  {
    header: "PTS",
    key: "pointsPerGame",
    title: "Points Per Game",
  },
  {
    header: "FGM",
    key: "fieldGoalsMade",
    title: "Field Goals Made",
  },
  {
    header: "FGA",
    key: "fieldGoalsAttempted",
    title: "Field Goals Attempted",
  },
  {
    header: "FG%",
    key: "fieldGoalsPercentage",
    title: "Field Goals Percentage",
  },
  {
    header: "FTM",
    key: "freeThrowsMadePerGame",
    title: "Free Throws Made Per Game",
  },
  {
    header: "FTA",
    key: "freeThrowsAttemptedPerGame",
    title: "Free Throws Attempted Per Game",
  },
  {
    header: "FT%",
    key: "freeThrowsPercentage",
    title: "Free Throws Percentage",
  },
  {
    header: "BLK",
    key: "blocksPerGame",
    title: "Blocks Per Game",
  },
  {
    header: "STL",
    key: "stealsPerGame",
    title: "Steals Per Game",
  },
  {
    header: "PF",
    key: "foulsPersonalPerGame",
    title: "Personal Fouls Per Game",
  },
  {
    header: "REB",
    key: "reboundsPerGame",
    title: "Rebounds Per Game",
  },
  {
    header: "AST",
    key: "assistsPerGame",
    title: "Assists Per Game",
  },
];

// transform data to what I only need
const transformCareer = (data: CareerAPI[]): CareerTransformed[] => {
  return data.map((item) => ({
    id: "Career", // also used for keys in looping
    games: toFixedNumber(item.statistics.games, 0),
    pointsPerGame: toFixedNumber(item.statistics.pointsPerGame, 0),
    fieldGoalsMade: toFixedNumber(item.statistics.fieldGoalsMade, 0),
    fieldGoalsAttempted: toFixedNumber(item.statistics.fieldGoalsAttempted, 0),
    fieldGoalsPercentage: toFixedNumber(
      item.statistics.fieldGoalsPercentage,
      1,
    ),
    freeThrowsMadePerGame: toFixedNumber(
      item.statistics.freeThrowsMadePerGame,
      0,
    ),
    freeThrowsAttemptedPerGame: toFixedNumber(
      item.statistics.freeThrowsAttemptedPerGame,
      0,
    ),
    freeThrowsPercentage: toFixedNumber(
      item.statistics.freeThrowsPercentage,
      1,
    ),
    blocksPerGame: toFixedNumber(item.statistics.blocksPerGame, 0),
    stealsPerGame: toFixedNumber(item.statistics.stealsPerGame, 0),
    foulsPersonalPerGame: toFixedNumber(
      item.statistics.foulsPersonalPerGame,
      0,
    ),
    reboundsPerGame: toFixedNumber(item.statistics.reboundsPerGame, 0),
    assistsPerGame: toFixedNumber(item.statistics.assistsPerGame, 0),
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
    games: toFixedNumber(item.statistics.games, 0),
    pointsPerGame: toFixedNumber(item.statistics.pointsPerGame, 0),
    fieldGoalsMade: toFixedNumber(item.statistics.fieldGoalsMade, 0),
    fieldGoalsAttempted: toFixedNumber(item.statistics.fieldGoalsAttempted, 0),
    fieldGoalsPercentage: toFixedNumber(
      item.statistics.fieldGoalsPercentage,
      1,
    ),
    freeThrowsMadePerGame: toFixedNumber(
      item.statistics.freeThrowsMadePerGame,
      0,
    ),
    freeThrowsAttemptedPerGame: toFixedNumber(
      item.statistics.freeThrowsAttemptedPerGame,
      0,
    ),
    freeThrowsPercentage: toFixedNumber(
      item.statistics.freeThrowsPercentage,
      1,
    ),
    blocksPerGame: toFixedNumber(item.statistics.blocksPerGame, 0),
    stealsPerGame: toFixedNumber(item.statistics.stealsPerGame, 0),
    foulsPersonalPerGame: toFixedNumber(
      item.statistics.foulsPersonalPerGame,
      0,
    ),
    reboundsPerGame: toFixedNumber(item.statistics.reboundsPerGame, 0),
    assistsPerGame: toFixedNumber(item.statistics.assistsPerGame, 0),
  }));
};

export default async function CareerStats({ playerId }: { playerId: string }) {
  const careerStats = await fetchCareerStats(playerId);
  const seasonStats = await fetchSeasonStats(playerId);

  // merge career and seasons data for table, career at the bottom
  const tblData = [
    ...transformSeasons(
      seasonStats.data.reverse(), // reverse the array to show the latest at the top row
      nullCatchArray(seasonStats.includes?.resources?.entities),
      nullCatchArray(seasonStats.includes?.resources?.seasons),
    ),
    ...transformCareer(careerStats.data),
  ];

  return (
    <>
      <p className="mb-1 mt-3 text-center text-lg md:text-xl">Career Stats</p>
      <div className="overflow-x-auto rounded-xl bg-white">
        <Table columns={statsColumns} data={tblData} />
      </div>
    </>
  );
}

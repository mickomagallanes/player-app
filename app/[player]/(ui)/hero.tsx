import React from "react";
import SeasonAverage from "./season-average";
import Thumbnail from "./thumbnail";
import { fetchPersonById, fetchSeasonStats } from "@/lib/data";
import Image from "next/image";

interface ImageObj {
  images: {
    url: string;
  }[];
}

const getImages = (imgObj: ImageObj) => {
  return imgObj?.images?.length && imgObj?.images[0]?.url
    ? `${imgObj.images[0].url}?size=400`
    : null;
};

export default async function Hero({ playerId }: { playerId: string }) {
  // get the team of player from latest season, since the person API does not provide it
  const seasonStats = await fetchSeasonStats(playerId);
  const seasonsData = seasonStats.data;
  const latestSeasonData = seasonsData[seasonsData.length - 1];

  const currentTeamInfo =
    seasonStats.includes?.resources?.entities[
      `${latestSeasonData.organizationId}:${latestSeasonData.entityId}`
    ] ?? null;

  const latestSeasonName =
    seasonStats.includes?.resources?.seasons[latestSeasonData.seasonId]
      .nameLocal;

  const currentTeamImg = getImages(currentTeamInfo);

  // fetch the main person data
  const { data } = await fetchPersonById(playerId);
  const imgSrc = getImages(data[0]);

  return (
    <>
      <div className="mb-6 flex flex-col items-center justify-center md:order-3 md:md:col-span-3 md:flex-row md:justify-normal md:text-left md:text-4xl">
        {currentTeamImg && (
          <Image
            src={currentTeamImg}
            alt={currentTeamInfo.nameFullLocal}
            className="mb-2 w-14 md:mb-0 md:mr-4 md:w-auto"
            width={75}
            height={75}
          />
        )}

        <div>
          <h1 className="text-2xl font-semibold md:text-4xl">
            {data[0]?.nameFullLocal ?? "-"}
          </h1>

          <p className="text-center text-lg text-[#A2A2A2] md:text-left">
            {currentTeamInfo?.nameFullLocal ?? "-"}
          </p>
        </div>
      </div>

      <Thumbnail imgSrc={imgSrc} alt={data[0].nameFullLocal} />
      <div className="bg-transparent md:order-2 md:col-span-1 md:row-span-2"></div>
      <SeasonAverage
        seasonName={latestSeasonName}
        latestStats={latestSeasonData?.statistics}
      />
    </>
  );
}

"use client";
import { fetchAllPlayers } from "@/lib/actions";
import Card from "@/ui/card";
import CardLoading from "@/ui/card-loading";

import React, { useState } from "react";

export default function MainPage({ initialData }: { initialData: Player[] }) {
  const [offset, setOffset] = useState(20);
  const [data, setData] = useState<Player[]>(initialData);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePosts = async () => {
    if (hasMoreData) {
      setIsLoading(true);

      // server only function to fetch data like infinite scroll
      const apiPlayers = await fetchAllPlayers(offset);
      setIsLoading(false);
      if (apiPlayers.length == 0) {
        setHasMoreData(false);
      }

      setData((prevData: Player[]) => [...prevData, ...apiPlayers.data]);
      setOffset((prevOffset) => prevOffset + 20);
    }
  };

  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 p-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.length > 0 &&
          data.map((player) => (
            <Card
              key={player.personId}
              link={`/${player.personId}`}
              label={player.nameFullLocal}
              imageSrc={
                player.images.length ? `${player.images[0].url}?size=400` : null
              }
            />
          ))}
        {isLoading && <CardsSkeleton />}
      </div>

      {hasMoreData && !isLoading && (
        <p
          className="cursor-pointer text-center text-lg text-blue-700 hover:underline"
          onClick={loadMorePosts}
        >
          Show More
        </p>
      )}
    </>
  );
}

const CardsSkeleton = () => {
  const createCards = () => {
    const gridArr = [];

    for (let i = 0; i < 8; i++) {
      gridArr.push(<CardLoading key={i} />);
    }

    return gridArr;
  };

  return <>{createCards()}</>;
};

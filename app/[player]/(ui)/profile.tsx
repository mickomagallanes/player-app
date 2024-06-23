import { fetchPersonById } from "@/lib/data";
import { capitalizeFirstLetter, nullCatch } from "@/lib/utils";
import React from "react";

export default async function Profile({ playerId }: { playerId: string }) {
  const { data } = await fetchPersonById(playerId);
  const details = data[0].additionalDetails;
  const height = details === undefined ? null : details.height;
  const weight = details === undefined ? null : details.weight;

  return (
    <>
      <p className="mb-1 mt-3 text-center text-lg md:text-xl">Profile</p>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 rounded-xl bg-[#212121] px-4 py-5 text-[#E2E2E2] md:px-24 lg:px-36">
        <GridInfo
          title="Gender"
          value={capitalizeFirstLetter(data[0].gender)}
        />
        <GridInfo title="Date of Birth" value={data[0].dob} />
        <GridInfo title="Height" value={nullCatch(height)} />
        <GridInfo title="Weight" value={nullCatch(weight)} />
        <GridInfo title="Nationality" value={nullCatch(data[0].nationality)} />
        <GridInfo
          title="Status"
          value={capitalizeFirstLetter(data[0].status)}
        />
      </div>
    </>
  );
}

const GridInfo = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="text-center text-sm md:text-base">{value}</p>
        <p className="text-center text-xs text-[#A2A2A2] md:text-sm">{title}</p>
      </div>
    </div>
  );
};

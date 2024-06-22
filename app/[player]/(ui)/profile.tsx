import React from "react";

export default function Profile({ playerId }: { playerId: string }) {
  return (
    <>
      <p className="mb-1 mt-3 text-center text-lg">Profile</p>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 rounded-xl bg-[#212121] px-4 py-5 text-[#E2E2E2] md:px-24 lg:px-36">
        <GridInfo title="Gender" value="Female" />
        <GridInfo title="Date of Birth" value="March 12, 1999" />
        <GridInfo title="Height" value="143" />
        <GridInfo title="Weight" value="342" />
        <GridInfo title="Nationality" value="Australian" />
        <GridInfo title="Status" value="Active" />
      </div>
    </>
  );
}

const GridInfo = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="text-center text-sm">{value}</p>
        <p className="text-center text-xs text-[#A2A2A2]">{title}</p>
      </div>
    </div>
  );
};

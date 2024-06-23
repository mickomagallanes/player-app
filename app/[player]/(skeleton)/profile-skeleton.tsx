import React from "react";

export default function ProfileSkeleton() {
  const createGridSkeleton = () => {
    const gridArr = [];

    for (let i = 0; i < 6; i++) {
      gridArr.push(<GridInfoSkeleton key={i} />);
    }

    return gridArr;
  };

  return (
    <>
      <p className="mb-1 mt-3 text-center text-lg md:text-xl">Profile</p>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 rounded-xl bg-[#212121] px-4 py-5 text-[#E2E2E2] md:px-24 lg:px-36">
        {createGridSkeleton()}
      </div>
    </>
  );
}

const GridInfoSkeleton = () => {
  return (
    <div className="flex h-12 items-center justify-center">
      <div className="flex size-full animate-pulse items-center justify-center">
        <p className="m-auto h-6 w-full rounded-md bg-slate-200 text-center text-sm md:w-3/4 md:text-base"></p>
      </div>
    </div>
  );
};

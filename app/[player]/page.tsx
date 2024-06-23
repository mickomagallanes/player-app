import React, { Suspense } from "react";
import Hero from "./(ui)/hero";
import Profile from "./(ui)/profile";
import CareerStats from "./(ui)/career-stats";
import CareerSkeleton from "./(skeleton)/career-skeleton";
import HeroSkeleton from "./(skeleton)/hero-skeleton";
import ProfileSkeleton from "./(skeleton)/profile-skeleton";
import Back from "@/ui/back";

export default function Player({ params }: { params: { player: string } }) {
  return (
    <div className="flex flex-col">
      <div className="bg-[#3b3b3b] bg-gradient-to-t from-black to-50% pt-12 text-[#E2E2E2] md:grid">
        <Back />
        <div className="flex flex-col justify-center md:container md:m-auto md:grid md:grid-flow-col md:grid-cols-7 md:grid-rows-2 md:px-24">
          <Suspense fallback={<HeroSkeleton />}>
            <Hero playerId={params.player} />
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col justify-center p-2 md:container md:m-auto md:px-24">
        <Suspense fallback={<ProfileSkeleton />}>
          <Profile playerId={params.player} />
        </Suspense>
      </div>
      <div className="mb-6 flex flex-col p-2 md:container md:mx-auto md:px-24">
        <Suspense fallback={<CareerSkeleton />}>
          <CareerStats playerId={params.player} />
        </Suspense>
      </div>
    </div>
  );
}

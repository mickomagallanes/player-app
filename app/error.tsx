"use client"; // Error components must be Client Components

import Back from "@/ui/back";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center pb-6">
      <Back />
      <h1 className="mt-12 text-center text-lg font-semibold md:text-xl">
        {error.message}
      </h1>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Back() {
  return (
    <Link
      href={"/"}
      className="absolute left-2 top-3 mb-2 me-2 flex cursor-pointer flex-row items-center rounded-lg p-0 text-sm font-medium text-gray-100 md:left-6 md:top-6"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="size-6 text-gray-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </Link>
  );
}

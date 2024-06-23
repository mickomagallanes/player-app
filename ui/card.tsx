"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  link,
  label,
  imageSrc,
}: {
  link: string;
  label: string;
  imageSrc: strOrNull;
}) {
  return (
    <Link
      href={link}
      className="flex flex-row gap-2 rounded-xl bg-white px-6 pt-2 align-middle hover:underline"
    >
      <p className="my-auto flex flex-1 align-middle">{label}</p>
      <Image
        src={imageSrc ?? "/images/person-placeholder.svg"}
        alt={label}
        width={90}
        height={90}
      />
    </Link>
  );
}

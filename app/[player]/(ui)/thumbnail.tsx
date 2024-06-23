import Image from "next/image";
import React from "react";

export default function Thumbnail({
  imgSrc,
  alt,
}: {
  imgSrc: strOrNull;
  alt: string;
}) {
  return (
    <div className="flex justify-center md:order-1 md:col-span-2 md:row-span-2">
      <Image
        src={imgSrc ?? "/images/person-placeholder.svg"}
        alt={alt}
        className="max-h-full w-48 max-w-xs sm:w-64 md:w-80"
        width={400}
        height={400}
      />
    </div>
  );
}

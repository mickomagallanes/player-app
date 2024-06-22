import Image from "next/image";
import React from "react";

export default function Thumbnail({ imgSrc }: { imgSrc: strOrNull }) {
  return (
    <div className="flex justify-center md:order-1 md:col-span-2 md:row-span-2">
      <Image
        src={imgSrc ?? "/images/person-placeholder.svg"}
        alt="basketball"
        className="max-h-full w-[200px] max-w-[300px] sm:w-[250px] md:w-[300px]"
        width={400}
        height={400}
      />
    </div>
  );
}

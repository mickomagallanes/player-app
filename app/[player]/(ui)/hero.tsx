import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/person-placeholder.svg"
        alt="basketball"
        width={150}
        height={150}
      />
    </div>
  );
}

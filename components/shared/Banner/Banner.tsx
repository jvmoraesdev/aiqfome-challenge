import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative aspect-[3/1] w-full">
      <Image alt="banner" src="/banner.png" fill className="object-cover" priority />
    </div>
  );
};

export default Banner;
